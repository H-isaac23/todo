import axios from "axios";
import { TodoBase, TodoItem } from "../../types";
const baseUrl = "http://localhost:3001";

const fetchTodos = async () => {
  const items = await axios.get<TodoItem[]>(`${baseUrl}/todo`);
  return items;
};

const updateTodo = async (id: string) => {
  return await axios.put(`${baseUrl}/todo/${id}`);
};

const addTodo = async (todoItem: TodoBase) => {
  return await axios.post(`${baseUrl}/todo`, todoItem);
};

export default {
  fetchTodos,
  updateTodo,
  addTodo,
};
