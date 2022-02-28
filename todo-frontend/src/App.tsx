import React from "react";
import { AppShell, Navbar, Header } from "@mantine/core";
import TodoList from "./components/TodoList";

const App = () => {
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
      <TodoList />
    </AppShell>
  );
};

export default App;
