import { useDisclosure } from "@mantine/hooks";
import { Modal, Button } from "@mantine/core";

function AddCeo() {
  const [opened, { open, close }] = useDisclosure(false);

  return (
    <>
      <Modal
        opened={opened}
        onClose={close}
        title="Authentication"
        overlayProps={{
          backgroundOpacity: 0.55,
          blur: 3,
        }}
      >
        {/* Modal content */}
      </Modal>

      <Button onClick={open}>Add Ceo</Button>
    </>
  );
}

export default AddCeo;
