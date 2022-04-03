import { Dispatch, SetStateAction } from "react";

export enum Status {
  Active = "active",
  Done = "done",
}

export interface TodoBase {
  todo: string;
  deadline: Date;
}

export interface TodoItem extends TodoBase {
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
