import React, { useState } from "react";
import { useDisclosure } from "@mantine/hooks";
import { Modal, Button, TextInput } from "@mantine/core";
import { createCeo } from "../../api/ceoApi";


function AddCeo() {
  const [opened, { open, close }] = useDisclosure(false);
  const [ceoData, setCeoData] = useState({
    companyName: "",
    ceoName: "",
    name: "",
    description: "",
  });


  const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = event.target;
    setCeoData((prevData) => ({
      ...prevData,
      [name]: value,
    }));
  };

  const handleSubmit = async () => {
    try {
      await createCeo(ceoData);
      // Reset form data
      setCeoData({
        companyName: "",
        ceoName: "",
        name: "",
        description: "",
      });
  
      close();
     
    } catch (error) {
      console.error("Error adding CEO:", error);
  
    }
  };

  return (
    <>
      <Modal
        opened={opened}
        onClose={close}
        title="Add CEO"
        overlayProps={{
          backgroundOpacity: 0.55,
          blur: 3,
        }}
      >
        <TextInput
          label="Company Name"
          placeholder="Enter company name"
          name="companyName"
          value={ceoData.companyName}
          onChange={handleChange}
          required
        />
        <TextInput
          label="CEO Name"
          placeholder="Enter CEO name"
          name="ceoName"
          value={ceoData.ceoName}
          onChange={handleChange}
          required
        />
        <TextInput
          label="Role"
          placeholder="Enter role"
          name="name"
          value={ceoData.name}
          onChange={handleChange}
          required
        />
        <TextInput
          label="Description"
          placeholder="Enter description"
          name="description"
          value={ceoData.description}
          onChange={handleChange}
          required
        />

        <Button onClick={handleSubmit} variant="filled" color="blue">
          Add CEO
        </Button>
      </Modal>

      <Button onClick={open}>Add CEO</Button>
    </>
  );
}

export default AddCeo;
