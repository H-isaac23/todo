import { useState } from "react";
import { Button } from "@mantine/core";

import TodoCard from "./TodoCard";
import { TodoItem } from "../../types";
import TodoModal from "./TodoModal";

interface ListProps {
  todos: TodoItem[];
}

export default function TodoList({ todos }: ListProps) {
  const [opened, setOpened] = useState(false);

  if (todos.length === 0) {
    return null;
  }

  return (
    <div>
      <TodoModal opened={opened} setOpened={setOpened} />
      {todos.map((todo: TodoItem, i: number) => (
        <div key={i}>
          <TodoCard item={todo} />
        </div>
      ))}
      <div style={{ margin: "10px" }}>
        <Button color="teal" onClick={() => setOpened((o) => !o)}>
          Add New Todo
        </Button>
      </div>
    </div>
  );
}
