import express from "express";
import todoServices from "../services/todoServices";

const route = express.Router();

route.get("/", (_, res) => {
  res.send(todoServices.getTodoItems());
});

route.put("/:id", (req, res) => {
  const todoId = req.params.id;
  res.status(200).send(todoServices.updateTodoItem(todoId));
});

export default route;
