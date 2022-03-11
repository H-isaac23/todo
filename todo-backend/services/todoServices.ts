import sampleData from "../sampleData";
import { Status, TodoItem } from "../types";

let data: TodoItem[] = sampleData;

const getTodoItems = (): Array<TodoItem> => {
  return data;
};

const updateTodoItem = (id: string) => {
  const todoItem = data.find((item: TodoItem) => item.id === id);

  if (todoItem) {
    todoItem.status =
      todoItem.status === Status.Active ? Status.Done : Status.Active;
    data = data.map((item: TodoItem) => (item.id === id ? todoItem : item));
  }

  return todoItem;
};

export default { getTodoItems, updateTodoItem };
