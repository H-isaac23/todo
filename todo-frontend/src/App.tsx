import { useState, useEffect } from "react";
import { AppShell, Navbar, Header, Loader } from "@mantine/core";
import { Routes, Route } from "react-router-dom";

import TodoList from "./components/TodoList";
import ArchivedList from "./components/ArchivedList";
import { TodoItem } from "../types";
import todoServices from "./services/todoServices";
import { TodoProvider } from "./context/todoContext";

const App = () => {
  const [todos, setTodos] = useState<TodoItem[]>([]);
  useEffect(() => {
    const fetchTodos = async () => {
      const { data: todos } = await todoServices.fetchTodos();
      setTodos(todos);
    };
    void fetchTodos();
  }, []);

  return (
    <AppShell
      padding="md"
      navbar={
        <Navbar width={{ base: 300 }} height={500} padding="xs">
          Todo List
        </Navbar>
      }
      header={
        <Header height={60} padding="xs">
          Test Header
        </Header>
      }
      styles={(theme) => ({
        main: {
          backgroundColor:
            theme.colorScheme === "dark"
              ? theme.colors.dark[8]
              : theme.colors.gray[0],
        },
      })}
    >
      {todos.length === 0 && <Loader />}
      <TodoProvider todoState={{ todos, setTodos }}>
        <Routes>
          <Route path="/archived" element={<ArchivedList todos={todos} />} />
          <Route path="/" element={<TodoList todos={todos} />} />
        </Routes>
      </TodoProvider>
    </AppShell>
  );
};

export default App;
