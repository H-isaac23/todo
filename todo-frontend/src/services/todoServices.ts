import axios from "axios";
import { TodoItem } from "../../types";
const baseUrl = "http://localhost:3001";

const fetchTodos = async () => {
  const items = await axios.get<TodoItem[]>(`${baseUrl}/todo`);
  return items;
};

export default {
  fetchTodos,
};
