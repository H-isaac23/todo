import { Dispatch, SetStateAction } from "react";

export enum Status {
  Active = "active",
  Done = "done",
}

export interface TodoEntry {
  todo: string;
  deadline: string;
}

export interface TodoItem extends TodoEntry {
  id: string;
  status: Status;
}

export interface TodoContextValue {
  todos: TodoItem[];
  setTodos: Dispatch<SetStateAction<TodoItem[]>>;
}

export interface TodoProviderProps {
  todoState: TodoContextValue;
  children: React.ReactElement;
}
