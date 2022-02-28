import express from "express";
import todoServices from "../services/todoServices";

const route = express.Router();

route.get("/", (_, res) => {
  res.send(todoServices.getTodoItems());
});

export default route;
