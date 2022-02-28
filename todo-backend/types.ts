export interface TodoEntry {
  todo: string;
  deadline: string;
}

export interface TodoItem extends TodoEntry {
  id: string;
}
