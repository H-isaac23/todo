import React, { useContext } from "react";
import { TodoContextValue, TodoProviderProps } from "../../types";

const initialState: TodoContextValue = {
  todos: [],
  setTodos: () => {},
};

const TodoContext = React.createContext(initialState);

export const TodoProvider: React.FC<TodoProviderProps> = ({
  todoState,
  children,
}: TodoProviderProps) => {
  return (
    <TodoContext.Provider value={todoState}>{children}</TodoContext.Provider>
  );
};

export const useTodoContext = () => useContext(TodoContext);
