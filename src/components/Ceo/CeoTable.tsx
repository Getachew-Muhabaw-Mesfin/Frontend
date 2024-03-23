"use client";
import React, { useState, useEffect } from "react";
import { getAllCeo, deleteCeo } from "@/api/ceoApi";
import {
  Table,
  ScrollArea,
  UnstyledButton,
  Group,
  Text,
  TextInput,
} from "@mantine/core";
import { IconSearch, IconEdit, IconTrash } from "@tabler/icons-react";
import classes from "../../styles/Table.module.css";
import LoadingComponent from "../LoadingComponent";

interface Ceo {
  id: number;
  companyName: string;
  ceoName: string;
  name: string;
  description: string;
}

interface ThProps {
  children: React.ReactNode;
  onSort(): void;
}

function Th({ children, onSort }: ThProps) {
  return (
    <Table.Th className={classes.th}>
      <UnstyledButton onClick={onSort} className={classes.control}>
        <Group justify="space-between">
          <Text fw={500} fz="sm">
            {children}
          </Text>
        </Group>
      </UnstyledButton>
    </Table.Th>
  );
}

export function CeoTable() {
  const [search, setSearch] = useState("");
  const [ceos, setCeos] = useState<Ceo[]>([]);
  const [sortBy, setSortBy] = useState<keyof Ceo | null>(null);

  useEffect(() => {
    async function fetchData() {
      try {
        const response = await getAllCeo();
        setCeos(response.data);
        console.log(response.data);
      } catch (error) {
        console.error("Error fetching CEOs:", error);
      }
    }
    fetchData();
  }, []);

  const handleSearchChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setSearch(event.currentTarget.value);
  };

  const handleSort = (field: keyof Ceo) => {
    setSortBy(field);
    // You might want to sort the data here based on the field
  };

  const handleDelete = async (id: number) => {
    try {
      await deleteCeo(id);
      setCeos(ceos.filter((ceo) => ceo.id !== id));
    } catch (error) {
      console.error("Error deleting CEO:", error);
    }
  };

  const filteredCeos = ceos.filter((ceo) =>
    Object.values(ceo).some(
      (value) =>
        typeof value === "string" &&
        value.toLowerCase().includes(search.toLowerCase())
    )
  );

  return (
    <ScrollArea>
      <TextInput
        placeholder="Search by any field"
        mb="md"
        leftSection={<IconSearch />}
        value={search}
        onChange={handleSearchChange}
      />
      <Table
        horizontalSpacing="md"
        verticalSpacing="xs"
        miw={700}
        layout="fixed"
      >
        <Table.Tbody>
          <Table.Tr>
            <Th onSort={() => handleSort("companyName")}>Company Name</Th>
            <Th onSort={() => handleSort("ceoName")}>CEO Name</Th>
            <Th onSort={() => handleSort("name")}>Role</Th>
            <Th onSort={() => handleSort("description")}>Description</Th>
            <Table.Th>Actions</Table.Th>
          </Table.Tr>
        </Table.Tbody>
        <Table.Tbody>
          {filteredCeos.length > 0 ? (
            filteredCeos.map((ceo) => (
              <Table.Tr key={ceo.id}>
                <Table.Td>{ceo.companyName}</Table.Td>
                <Table.Td>{ceo.ceoName}</Table.Td>
                <Table.Td>{ceo.name}</Table.Td>
                <Table.Td>{ceo.description}</Table.Td>
                <Table.Td>
                  <UnstyledButton style={{ color: "blue" }}>
                    <IconEdit size={20} />
                  </UnstyledButton>
                  <UnstyledButton
                    onClick={() => handleDelete(ceo.id)}
                    style={{ margin: "0 1rem", color: "red" }}
                  >
                    <IconTrash size={20} />
                  </UnstyledButton>
                </Table.Td>
              </Table.Tr>
            ))
          ) : (
            <LoadingComponent />
          )}
        </Table.Tbody>
      </Table>
    </ScrollArea>
  );
}

export default CeoTable;
