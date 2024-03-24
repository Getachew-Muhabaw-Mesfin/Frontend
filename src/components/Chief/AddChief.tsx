import React, { useState, useEffect } from "react";
import { useDisclosure } from "@mantine/hooks";
import { Modal, Button, TextInput, Select } from "@mantine/core";
import { createChief } from "../../api/chiefAPI";
import { getAllCeo } from "../../api/ceoApi";

const AddChief = () => {
  const [opened, { open, close }] = useDisclosure(false);
  const [chiefData, setChiefData] = useState({
    name: "",
    description: "",
    ceoId: "",
  });
  const [ceos, setCeos] = useState([]);

  useEffect(() => {
    async function fetchCeoData() {
      try {
        const response = await getAllCeo();
        setCeos(response.data);
      } catch (error) {
        console.error("Error fetching CEOs:", error);
      }
    }
    fetchCeoData();
  }, []);

  const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = event.target;
    setChiefData((prevData) => ({
      ...prevData,
      [name]: value,
    }));
  };

  const handleSelectChange = (value) => {
    setChiefData((prevData) => ({
      ...prevData,
      ceoId: value,
    }));
  };

  const handleSubmit = async () => {
    try {
      await createChief(chiefData);
      // Reset form data
      setChiefData({
        name: "",
        description: "",
        ceoId: "",
      });
      // Close the modal after successful submission
      close();
      // You might want to implement some notification or redirection upon successful submission
    } catch (error) {
      console.error("Error adding Chief:", error);
      // Handle error here (e.g., show error message to the user)
    }
  };

  return (
    <>
      <Modal
        opened={opened}
        onClose={close}
        title="Add Chief"
        overlayProps={{
          backgroundOpacity: 0.55,
          blur: 3,
        }}
      >
        <TextInput
          label="Name"
          placeholder="Enter name"
          name="name"
          value={chiefData.name}
          onChange={handleChange}
          required
        />
        <TextInput
          label="Description"
          placeholder="Enter description"
          name="description"
          value={chiefData.description}
          onChange={handleChange}
          required
        />
        
        <Button onClick={handleSubmit} variant="filled" color="blue">
          Add Chief
        </Button>
      </Modal>

      <Button onClick={open}>Add Chief</Button>
    </>
  );
};

export default AddChief;
