import {taskRepository as repository} from '../repositories/task-repository'
import {Task} from "../models/task";
import {getCurrentDate, getCurrentTime} from "./date-time-service";
import {randomString} from "./random-service";
import {FILES_UPLOAD_DIRECTORY} from "../consts/files";

class TaskService {

    async getAllTasks() {
        return await repository.getAllTasks();
    }

    async getAllTasksBySearch(search) {
        return await repository.getAllTasksBySearch(search);
    }

    async addTask(taskToCreate, file) {
        //console.log("Saving Task");
        const filename = this.saveFile(file);
        //console.log("no filename");

        const taskToSave = new Task({
            name: taskToCreate.name,
            status: taskToCreate.status,
            date_created: getCurrentDate(),
            time_created: getCurrentTime(),
            file: filename
        });
        return await repository.addTask(taskToSave);
    }

    saveFile(file) {
        if (!file) {
            return '';
        }
        const filename = randomString() + file.name;
        try {
            file.mv(FILES_UPLOAD_DIRECTORY + filename);
            return filename;
        } catch (error) {
            console.log(`Error when uploading file ${file.name}`);
            throw error;
        }
    }
}

const taskService = new TaskService();

export {taskService}
