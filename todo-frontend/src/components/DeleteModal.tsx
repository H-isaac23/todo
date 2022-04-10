import { Modal, Button, Text, Group, Space } from "@mantine/core";
import todoServices from "../services/todoServices";
import { useTodoContext } from "../context/todoContext";

interface ModalProps {
  opened: boolean;
  setOpened: (value: boolean) => void;
  setEditMode: (value: boolean) => void;
  id: string;
}

export default function DeleteModal({
  opened,
  setOpened,
  setEditMode,
  id,
}: ModalProps) {
  const { todos, setTodos } = useTodoContext();

  const onDelete = (id: string) => {
    todoServices.deleteTodo(id);
    const filteredTodos = todos.filter((todo) => todo.id !== id);
    console.table(filteredTodos);

    setEditMode(false);
    setOpened(false);
    setTodos([...filteredTodos]);
  };

  return (
    <>
      <Modal
        opened={opened}
        onClose={() => setOpened(false)}
        centered
        withCloseButton={false}
      >
        <Space h="sm" />
        <Text size="md">
          Confirm deleting this item? (You won't recover this!)
        </Text>
        <Space h="sm" />
        <Group position="center">
          <Button color="red" onClick={() => setOpened(false)}>
            No
          </Button>
          <Button color="green" onClick={() => onDelete(id)}>
            Yes
          </Button>
        </Group>
      </Modal>
    </>
  );
}
