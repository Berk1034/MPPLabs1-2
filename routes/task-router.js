import express from 'express'
import {taskController} from '../controllers/task-controller'
import {TASKS_BASE_URL, TASKS_SEARCH_URL} from "./routes";

const taskRouter = express.Router();

taskRouter.get(TASKS_BASE_URL, taskController.showAllTasks);
taskRouter.post(TASKS_BASE_URL, taskController.addTask);
taskRouter.get(TASKS_BASE_URL + TASKS_SEARCH_URL, taskController.searchTasks);

export {taskRouter}
