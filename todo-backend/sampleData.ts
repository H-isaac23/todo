import { TodoItem } from "./types";
import { v4 as uuid } from "uuid";

const sampleIds: string[] = [uuid(), uuid(), uuid(), uuid()];

const data: Array<TodoItem> = [
  {
    todo: "Watch 'The Saint's Magic Power is Omnipotent'",
    deadline: "2022-03-24",
    id: sampleIds[0],
  },
  {
    todo: "Wanikani review",
    deadline: "2022-03-24",
    id: sampleIds[1],
  },
  {
    todo: "Genki Reading",
    deadline: "2022-03-24",
    id: sampleIds[2],
  },
  {
    todo: "Leetcode Grind",
    deadline: "2022-03-24",
    id: sampleIds[3],
  },
];

export default data;
