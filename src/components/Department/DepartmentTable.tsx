"use client";
import React, { useState, useEffect } from "react";
import { getAllDepartments, deleteDepartment } from "@/api/departmentApi";
import {
  Table,
  ScrollArea,
  UnstyledButton,
  Group,
  Text,
  TextInput,
  Modal,
  Button,
} from "@mantine/core";
import { IconSearch, IconEdit, IconTrash } from "@tabler/icons-react";
import classes from "../../styles/Table.module.css";
import LoadingComponent from "../LoadingComponent";

interface Department {
  id: number;
  name: string;
  description: string;
  chiefId: number;
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

export function DepartmentTable() {
  const [search, setSearch] = useState("");
  const [departments, setDepartments] = useState<Department[]>([]);
  const [sortBy, setSortBy] = useState<keyof Department | null>(null);
  const [modalOpen, setModalOpen] = useState(false);
  const [deleteId, setDeleteId] = useState<number | null>(null);

  useEffect(() => {
    async function fetchData() {
      try {
        const response = await getAllDepartments();
        setDepartments(response.data);
        console.log(response.data);
      } catch (error) {
        console.error("Error fetching Departments:", error);
      }
    }
    fetchData();
  }, []);

  const handleSearchChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setSearch(event.currentTarget.value);
  };

  const handleSort = (field: keyof Department) => {
    setSortBy(field);
    // You might want to sort the data here based on the field
  };

  const handleDelete = (id: number) => {
    setDeleteId(id);
    setModalOpen(true);
  };

  const confirmDelete = async () => {
    if (deleteId !== null) {
      try {
        await deleteDepartment(deleteId);
        setDepartments(departments.filter((dept) => dept.id !== deleteId));
      } catch (error) {
        console.error("Error deleting Department:", error);
      }
      setModalOpen(false);
    }
  };

  const filteredDepartments = departments.filter((dept) =>
    Object.values(dept).some(
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
            <Th onSort={() => handleSort("name")}>Name</Th>
            <Table.Th>Description</Table.Th>
            <Table.Th>Reports To</Table.Th>
            <Table.Th>Actions</Table.Th>
          </Table.Tr>
        </Table.Tbody>
        <Table.Tbody>
          {filteredDepartments.length > 0 ? (
            filteredDepartments.map((dept) => (
              <Table.Tr key={dept.id}>
                <Table.Td>{dept.name}</Table.Td>
                <Table.Td>{dept.description}</Table.Td>
                <Table.Td>{dept.chiefId}</Table.Td>
                <Table.Td>
                  <UnstyledButton style={{ color: "blue" }}>
                    <IconEdit size={20} />
                  </UnstyledButton>
                  <UnstyledButton
                    onClick={() => handleDelete(dept.id)}
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
      <Modal
        opened={modalOpen}
        onClose={() => setModalOpen(false)}
        title="Confirm Delete"
        size="sm"
      >
        <Text>Are you sure you want to delete this department?</Text>
        <div className=" flex justify-between mt-2">
          <Button onClick={confirmDelete} color="red" variant="outline">
            Delete
          </Button>
          <Button onClick={() => setModalOpen(false)} variant="outline">
            Cancel
          </Button>
        </div>
      </Modal>
    </ScrollArea>
  );
}

export default DepartmentTable;
