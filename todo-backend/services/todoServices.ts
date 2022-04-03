import sampleData from "../sampleData";
import { Status, TodoItem, TodoBase } from "../types";
import { v4 as uuid } from "uuid";

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

const addTodoItem = (item: TodoBase) => {
  const newItem: TodoItem = { ...item, status: Status.Active, id: uuid() };
  data.push(newItem);

  return newItem;
};

export default { getTodoItems, updateTodoItem, addTodoItem };
