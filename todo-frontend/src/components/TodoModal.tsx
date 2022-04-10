import React, { useState } from "react";
import { Group, Modal, TextInput, Button } from "@mantine/core";
import { DatePicker } from "@mantine/dates";
import { useTodoContext } from "../context/todoContext";
import todoServices from "../services/todoServices";

interface ModalProps {
  opened: boolean;
  setOpened: (value: boolean) => void;
}

export default function TodoModal({ opened, setOpened }: ModalProps) {
  const [newTodo, setNewTodo] = useState("");
  const [deadline, setDeadline] = useState<Date | null>(new Date());
  const { todos, setTodos } = useTodoContext();

  const onNewTodoChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setNewTodo(e.target.value);
  };

  const onSubmit = async () => {
    if (deadline === null) {
      return;
    }

    const newItem = {
      todo: newTodo,
      deadline: deadline,
    };

    const { data: newItemWithId } = await todoServices.addTodo(newItem);
    setTodos([...todos, newItemWithId]);

    setNewTodo("");
    setOpened(false);
  };

  return (
    <Modal
      opened={opened}
      onClose={() => setOpened(false)}
      title="Add new Todo"
      centered
    >
      <TextInput
        placeholder="I want to..."
        label="Todo"
        value={newTodo}
        onChange={onNewTodoChange}
        required
      />
      <DatePicker
        placeholder="Deadline"
        label="Deadline"
        value={deadline}
        onChange={setDeadline}
        required
        style={{ marginTop: 20 }}
      />
      <Group position="right">
        <Button color="green" onClick={onSubmit} style={{ marginTop: 20 }}>
          Submit
        </Button>
      </Group>
    </Modal>
  );
}
