import axios from "axios";
import { TodoItem } from "../../types";
const baseUrl = "http://localhost:3001";

const fetchTodos = async () => {
  const items = await axios.get<TodoItem[]>(`${baseUrl}/todo`);
  return items;
};

const updateTodo = async (id: string) => {
  return await axios.put(`${baseUrl}/todo/${id}`);
};

export default {
  fetchTodos,
  updateTodo,
};
