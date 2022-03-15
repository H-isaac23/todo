import { Modal } from "@mantine/core";

interface ModalProps {
  opened: boolean;
  setOpened: (value: boolean) => void;
}

export default function TodoModal({ opened, setOpened }: ModalProps) {
  return (
    <Modal
      opened={opened}
      onClose={() => setOpened(false)}
      title="Test"
      centered
    >
      Hi
    </Modal>
  );
}
