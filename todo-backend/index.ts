import express from "express";
import todoRoute from "./routes/todo";
import cors from "cors";

const app = express();
app.use(express.json());
app.use(cors({ origin: ["http://localhost:3000"] }));

app.get("/", (_, res) => {
  res.send("Hello");
});

app.get("/ping", (_req, res) => {
  res.send("Pong");
});

app.use("/todo", todoRoute);

const PORT = 3001;
app.listen(PORT, () => {
  console.log(`Server listening at http://localhost:${PORT}`);
});
