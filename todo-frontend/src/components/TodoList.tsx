import TodoCard from "./TodoCard";
import { Status, TodoItem } from "../../types";

interface ListProps {
  todos: TodoItem[];
}

export default function TodoList({ todos }: ListProps) {
  const filteredTodo = [...todos].filter(
    (item: TodoItem) => item.status === Status.Active
  );

  if (filteredTodo.length === 0) {
    return null;
  }

  return (
    <div>
      {filteredTodo.map((todo: TodoItem, i: number) => (
        <div key={i}>
          <TodoCard item={todo} />
        </div>
      ))}
    </div>
  );
}
