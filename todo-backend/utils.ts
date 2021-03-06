import { TodoItem, Status } from "./types";
import { v4 as uuid } from "uuid";

const isDate = (param: string): boolean => {
  return Boolean(Date.parse(param));
};

const isString = (param: unknown): param is string => {
  return typeof param === "string" || param instanceof String;
};

// eslint-disable-next-line @typescript-eslint/no-explicit-any
const isStatus = (param: any): param is Status => {
  // eslint-disable-next-line @typescript-eslint/no-unsafe-argument
  return Object.values(Status).includes(param);
};

const parseString = (data: unknown): string => {
  if (!data || !isString(data)) {
    throw new Error("Malformatted string data");
  }

  return data;
};

const parseDate = (data: unknown): Date => {
  if (!data || !isString(data) || !isDate(data)) {
    throw new Error("Malformatted Date Entry");
  }

  return new Date(data);
};

const parseStatus = (data: unknown): Status => {
  if (!data || !isStatus(data)) {
    throw new Error("Malformatted Status");
  }

  return data;
};

const toNewTodoEntry = ({
  todo,
  deadline,
}: // eslint-disable-next-line @typescript-eslint/no-explicit-any
any): TodoItem => {
  const newTodoItem: TodoItem = {
    todo: parseString(todo),
    deadline: parseDate(deadline),
    id: uuid(),
    status: Status.Active,
  };

  return newTodoItem;
};

const toTodoItem = ({
  todo,
  deadline,
  id,
  status,
}: // eslint-disable-next-line @typescript-eslint/no-explicit-any
any): TodoItem => {
  const newTodoItem: TodoItem = {
    todo: parseString(todo),
    deadline: parseDate(deadline),
    id: parseString(id),
    status: parseStatus(status),
  };

  return newTodoItem;
};

export default { toNewTodoEntry, toTodoItem };
