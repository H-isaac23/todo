import TodoCard from "./TodoCard";
import { Status, TodoItem } from "../../types";

interface ListProps {
  todos: TodoItem[];
}

export default function ArchivedList({ todos }: ListProps) {
  if (todos.length === 0) {
    return null;
  }

  console.log(todos);

  return (
    <div>
      {todos
        .filter((item: TodoItem) => item.status === Status.Done)
        .map((todo: TodoItem, i: number) => (
          <div key={i}>
            <TodoCard item={todo} />
          </div>
        ))}
    </div>
  );
}
