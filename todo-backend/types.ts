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
