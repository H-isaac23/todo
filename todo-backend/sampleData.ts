import { TodoItem } from "./types";
import { v4 as uuid } from "uuid";

import { Status } from "./types";

const sampleIds: string[] = [uuid(), uuid(), uuid(), uuid()];

const data: Array<TodoItem> = [
  {
    todo: "Watch 'The Saint's Magic Power is Omnipotent'",
    deadline: new Date(2022, 3, 22),
    id: sampleIds[0],
    status: Status.Done,
  },
  {
    todo: "Wanikani review",
    deadline: new Date(2022, 3, 22),
    id: sampleIds[1],
    status: Status.Active,
  },
  {
    todo: "Genki Reading",
    deadline: new Date(2022, 3, 22),
    id: sampleIds[2],
    status: Status.Active,
  },
  {
    todo: "Leetcode Grind",
    deadline: new Date(2022, 3, 22),
    id: sampleIds[3],
    status: Status.Active,
  },
];

export default data;
