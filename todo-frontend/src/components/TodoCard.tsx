import { Card, Text, Badge, Group, Checkbox } from "@mantine/core";

import { TodoItem } from "../../types";
import { Status } from "../../types";
import { useTodoContext } from "../context/todoContext";
import todoServices from "../services/todoServices";

interface TodoItemProp {
  item: TodoItem;
}

const TodoCard = ({ item }: TodoItemProp) => {
  const { todos, setTodos } = useTodoContext();

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
      <Card shadow="sm" padding="lg">
        <Group>
          <Checkbox
            radius="xl"
            onChange={() => onChange(item)}
            checked={item.status === Status.Active ? false : true}
          />
          <Group direction="column">
            <Text weight={500}>{item.todo}</Text>
            <Badge
              variant="outline"
              color={item.status === Status.Active ? "teal" : "violet"}
            >
              {item.status}
            </Badge>
          </Group>
        </Group>
      </Card>
    </div>
  );
};

export default TodoCard;
