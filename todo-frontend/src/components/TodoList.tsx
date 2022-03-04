import React, { useState, useEffect, createContext, useContext } from "react";
import { Loader } from "@mantine/core";

import TodoCard from "./TodoCard";
import { Status, TodoItem } from "../../types";
import todoServices from "../services/todoServices";
import { TodoProvider } from "../context/todoContext";

const sortTodos = (a: TodoItem, b: TodoItem) => {
  if (a.status === b.status) {
    return 0;
  } else if (a.status === Status.Active) {
    return -1;
  } else {
    return 1;
  }
};

export default function TodoList() {
  const [todos, setTodos] = useState<TodoItem[]>([]);
  useEffect(() => {
    const fetchTodos = async () => {
      const { data: todos } = await todoServices.fetchTodos();
      setTodos(todos);
    };
    console.log("render");
    void fetchTodos();
  }, []);

  if (todos.length === 0) {
    return <Loader size="sm" />;
  }

  const sortedTodos = [...todos].sort(sortTodos);

  return (
    <TodoProvider todoState={{ todos, setTodos }}>
      <div>
        {sortedTodos.map((todo: TodoItem, i: number) => (
          <div key={i}>
            <TodoCard item={todo} />
          </div>
        ))}
      </div>
    </TodoProvider>
  );
}
