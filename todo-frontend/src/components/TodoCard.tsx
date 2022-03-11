import { useState } from "react";
import { Card, Text, Badge, Group, Checkbox } from "@mantine/core";

import { TodoItem } from "../../types";
import { Status } from "../../types";
import { useTodoContext } from "../context/todoContext";
import todoServices from "../services/todoServices";

interface TodoItemProp {
  item: TodoItem;
}

const TodoCard = ({ item }: TodoItemProp) => {
  const [todoItem, _] = useState<TodoItem>(item);
  const { todos, setTodos } = useTodoContext();

  const onChange = (todo: TodoItem) => {
    const updatedTodo = {
      ...todo,
      status: todo.status === Status.Done ? Status.Active : Status.Done,
    };
    // setTodoItem(updatedTodo);
    todoServices.updateTodo(todo.id);

    const updatedTodoList = todos.map((currItem) =>
      currItem.id === updatedTodo.id ? updatedTodo : currItem
    );
    setTodos(updatedTodoList);
  };

  return (
    <div style={{ margin: "5px" }}>
      <Card shadow="sm" padding="lg">
        <Group>
          <Checkbox
            radius="xl"
            onChange={() => onChange(todoItem)}
            checked={todoItem.status === Status.Active ? false : true}
          />
          <Group direction="column">
            <Text weight={500}>{todoItem.todo}</Text>
            <Badge
              variant="outline"
              color={todoItem.status === Status.Active ? "teal" : "violet"}
            >
              {todoItem.status}
            </Badge>
          </Group>
        </Group>
      </Card>
    </div>
  );
};

export default TodoCard;
