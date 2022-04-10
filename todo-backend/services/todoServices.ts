import sampleData from "../sampleData";
import { Status, TodoItem, TodoBase } from "../types";
import { v4 as uuid } from "uuid";

let data: TodoItem[] = sampleData;

const getTodoItems = (): Array<TodoItem> => {
  return data;
};

const updateTodoStatus = (id: string) => {
  const todoItem = data.find((item: TodoItem) => item.id === id);

  if (todoItem) {
    todoItem.status =
      todoItem.status === Status.Active ? Status.Done : Status.Active;
    data = data.map((item: TodoItem) => (item.id === id ? todoItem : item));
  }

  return todoItem;
};

const updateTodoList = (item: TodoItem) => {
  data = data.map((x: TodoItem) => (x.id === item.id ? item : x));
};

const addTodoItem = (item: TodoBase) => {
  const newItem: TodoItem = { ...item, status: Status.Active, id: uuid() };
  data.push(newItem);

  return newItem;
};

const deleteTodoItem = (id: string) => {
  const item = data.find((todo) => todo.id === id);
  if (!item) {
    throw new Error(`Item with id ${id} does not exist`);
  }
  data = data.filter((todo) => todo.id !== id);
};

export default {
  getTodoItems,
  updateTodoStatus,
  addTodoItem,
  updateTodoList,
  deleteTodoItem,
};
