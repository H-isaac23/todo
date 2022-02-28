import React, { useState, useEffect } from "react";
import { Loader } from "@mantine/core";

import TodoCard from "./TodoCard";
import { TodoItem } from "../../types";
import todoServices from "../services/todoServices";

export default function TodoList() {
  const [todos, setTodos] = useState<TodoItem[]>([]);
  console.table(todos);
  useEffect(() => {
    const fetchTodos = async () => {
      const { data: todos } = await todoServices.fetchTodos();
      setTodos(todos);
    };

    void fetchTodos();
  });

  if (todos.length === 0) {
    return <Loader size="sm" />;
  }

  return (
    <>
      {todos.map((todo: TodoItem) => (
        <div>
          <TodoCard item={todo} />
        </div>
      ))}
    </>
  );
}
