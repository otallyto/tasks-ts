import { Router } from "express";
import {
  getTasks,
  saveTasks,
  getTask,
  updateTasks,
  finishedTask,
  removeTask,
} from "./controller/TasksController";

const routes = Router();

routes.get("/tasks", getTasks);
routes.get("/tasks/:id", getTask);
routes.post("/tasks", saveTasks);
routes.put("/tasks/:id", updateTasks);
routes.patch("/tasks/:id", finishedTask);
routes.delete("/tasks/:id", removeTask);

export default routes;
