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

  const onChange = (todo: TodoItem) => {
    const updatedTodo = {
      ...todo,
      status: todo.status === Status.Done ? Status.Active : Status.Done,
    };
    todoServices.updateTodo(todo.id);

    const updatedTodoList = todos.map((currItem) =>
      currItem.id === updatedTodo.id ? updatedTodo : currItem
    );
    setTodos(updatedTodoList);
  };

  return (
    <div style={{ margin: "5px" }}>
      <Card shadow="sm" p="lg">
        <Group>
          <Checkbox
            radius="xl"
            onChange={() => onChange(item)}
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
                  color="gray"
                  onClick={() => setEditMode(false)}
                >
                  <Check size={22} strokeWidth={2} color={"grey"} />
                </Button>
                <Button
                  variant="subtle"
                  color="gray"
                  onClick={() => console.log("Todo Deleted.")}
                >
                  <Trash size={22} strokeWidth={2} color={"grey"} />
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
