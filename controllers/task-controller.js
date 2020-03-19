import {taskService as service} from '../services/task-service'
import {TASK_STATUSES} from "../models/task-status";

class TaskController {

    async showAllTasks(request, response) {
        const tasks = await service.getAllTasks();
        return response.render('index', {
            tasks: tasks,
            statuses: TASK_STATUSES
        });
    }

    async searchTasks(request, response) {
        const tasks = await service.getAllTasksBySearch(request.query['search']);
        return response.render('index', {
            tasks: tasks,
            statuses: TASK_STATUSES
        });
    }

    async addTask(request, response) {
      //console.log(request.files);
      if (request.files !== null){
        const savedTask = await service.addTask(request.body, request.files.file);
      }
      else{
        const savedTask = await service.addTask(request.body, "");
      }

        const tasks = await service.getAllTasks();
        return response.render('index', {
            tasks: tasks,
            statuses: TASK_STATUSES
        });
        //response.send(savedTask);
    }
}

const taskController = new TaskController();

export {taskController}
