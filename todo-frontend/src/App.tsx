import { useState, useEffect } from "react";
import {
  AppShell,
  Burger,
  Header,
  MediaQuery,
  Navbar,
  Text,
  useMantineTheme,
  Loader,
} from "@mantine/core";
import { Routes, Route } from "react-router-dom";
import { Home, Folders } from "tabler-icons-react";

import TodoList from "./components/TodoList";
import ArchivedList from "./components/ArchivedList";
import NavItem from "./components/NavItem";
import { Status, TodoItem } from "../types";
import todoServices from "./services/todoServices";
import { TodoProvider } from "./context/todoContext";

interface NavItems {
  label: string;
  icon: React.ReactNode;
  to: string;
}

const navItems: NavItems[] = [
  {
    label: "Home",
    to: "/",
    icon: <Home size={16} />,
  },
  {
    label: "Archived",
    to: "/archived",
    icon: <Folders size={16} />,
  },
];

const App = () => {
  const [todos, setTodos] = useState<TodoItem[]>([]);
  const [opened, setOpened] = useState(false);
  const theme = useMantineTheme();

  useEffect(() => {
    const fetchTodos = async () => {
      const { data: todos } = await todoServices.fetchTodos();
      setTodos(todos);
    };
    void fetchTodos();
  }, []);

  console.log(todos, "inside app");

  const archivedTodos = [...todos].filter(
    (item: TodoItem) => item.status === Status.Done
  );
  const activeTodos = [...todos].filter(
    (item: TodoItem) => item.status === Status.Active
  );

  return (
    <AppShell
      padding="md"
      navbar={
        <Navbar
          p="md"
          hiddenBreakpoint="sm"
          hidden={!opened}
          width={{ sm: 200, lg: 300 }}
        >
          {navItems.map((item: NavItems) => (
            <NavItem {...item} key={item.label} />
          ))}
        </Navbar>
      }
      header={
        <Header height={60} p="md">
          <div
            style={{ display: "flex", alignItems: "center", height: "100%" }}
          >
            <MediaQuery largerThan="sm" styles={{ display: "none" }}>
              <Burger
                opened={opened}
                onClick={() => setOpened((o) => !o)}
                size="sm"
                color={theme.colors.gray[6]}
                mr="xl"
              />
            </MediaQuery>

            <Text>Application header</Text>
          </div>
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
          <Route
            path="/archived"
            element={<ArchivedList todos={archivedTodos} />}
          />
          <Route path="/" element={<TodoList todos={activeTodos} />} />
        </Routes>
      </TodoProvider>
    </AppShell>
  );
};

export default App;
