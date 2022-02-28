import data from "../sampleData";
import { TodoItem } from "../types";

const getTodoItems = (): Array<TodoItem> => {
  return data;
};

export default { getTodoItems };
