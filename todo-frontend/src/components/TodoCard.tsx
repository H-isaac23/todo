import {
  Card,
  Text,
  Badge,
  Group,
  Button,
  Checkbox,
  createStyles,
  TextInput,
} from "@mantine/core";
import { Pencil, Check, Trash } from "tabler-icons-react";
import { useState } from "react";
import DeleteModal from "./DeleteModal";

import { TodoItem } from "../../types";
import { Status } from "../../types";
import { useTodoContext } from "../context/todoContext";
import todoServices from "../services/todoServices";

interface TodoItemProp {
  item: TodoItem;
}

const useStyles = createStyles(() => ({
  editButton: {
    display: "flex",
    flexDirection: "column",
    position: "absolute",
    right: "1em",
  },

  todoDetails: {
    display: "flex",
    flexDirection: "column",
    gap: "0.5em",
    alignItems: "flex-start",
  },
}));

const TodoCard = ({ item }: TodoItemProp) => {
  const { classes } = useStyles();
  const { todos, setTodos } = useTodoContext();
  const [editMode, setEditMode] = useState(false);
  const [value, setValue] = useState(item.todo);
  const [opened, setOpened] = useState(false);

  const onStatusUpdate = (todo: TodoItem) => {
    const updatedTodo = {
      ...todo,
      status: todo.status === Status.Done ? Status.Active : Status.Done,
    };
    todoServices.updateTodoStatus(todo.id);

    const updatedTodoList = todos.map((currItem) =>
      currItem.id === updatedTodo.id ? updatedTodo : currItem
    );
    setTodos(updatedTodoList);
  };

  const onTodoEdit = (todoItem: TodoItem) => {
    const updatedTodo = {
      ...todoItem,
      todo: value,
    };
    todoServices.updateTodo(updatedTodo);

    const updatedTodoList = todos.map((currItem) =>
      currItem.id === updatedTodo.id ? updatedTodo : currItem
    );
    setTodos(updatedTodoList);
    setEditMode(false);
  };

  return (
    <div style={{ margin: "5px" }}>
      <DeleteModal
        opened={opened}
        setOpened={setOpened}
        id={item.id}
        setEditMode={setEditMode}
      />
      <Card shadow="sm" p="lg">
        <Group>
          <Checkbox
            radius="xl"
            onChange={() => onStatusUpdate(item)}
            checked={item.status === Status.Active ? false : true}
          />
          <div className={classes.todoDetails}>
            {editMode || <Text weight={500}>{item.todo}</Text>}
            {!editMode || (
              <TextInput
                value={value}
                onChange={(e) => setValue(e.currentTarget.value)}
              />
            )}
            <Badge
              variant="outline"
              color={item.status === Status.Active ? "teal" : "violet"}
            >
              {item.status}
            </Badge>
          </div>
          <div className={classes.editButton}>
            {editMode || (
              <Button
                variant="subtle"
                color="gray"
                onClick={() => setEditMode(true)}
              >
                <Pencil size={22} strokeWidth={2} color={"grey"} />
              </Button>
            )}
            {!editMode || (
              <>
                <Button
                  variant="subtle"
                  color="green"
                  onClick={() => onTodoEdit(item)}
                >
                  <Check size={22} strokeWidth={2} color={"green"} />
                </Button>
                <Button
                  variant="subtle"
                  color="red"
                  onClick={() => setOpened(true)}
                >
                  <Trash size={22} strokeWidth={2} color={"red"} />
                </Button>
              </>
            )}
          </div>
        </Group>
      </Card>
    </div>
  );
};

export default TodoCard;
