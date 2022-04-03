import express from "express";
import todoServices from "../services/todoServices";
import toNewTodoEntry from "../utils";

const route = express.Router();

route.get("/", (_, res) => {
  res.send(todoServices.getTodoItems());
});

route.put("/:id", (req, res) => {
  const todoId = req.params.id;
  res.status(200).send(todoServices.updateTodoItem(todoId));
});

route.post("/", (req, res) => {
  // console.log(req.body.deadline);
  // // eslint-disable-next-line @typescript-eslint/no-unsafe-argument
  // console.log(new Date(req.body.deadline));
  // res.status(200);
  try {
    const parsedTodo = toNewTodoEntry(req.body);
    todoServices.addTodoItem(parsedTodo);
    res.status(200).send(parsedTodo);
  } catch (error: unknown) {
    console.log(error);
    res.status(400);
  }
});

export default route;
