import {Task} from "../models/task";

class TaskRepository {

    async getAllTasks() {
        try {
            return await Task.find();
        } catch (error) {
            console.log('Error when loading all tasks from database: ', error);
            throw error;
        }
    }

    async getAllTasksBySearch(search) {
        try {
            return await Task.find({status: {'$regex': search, '$options': 'i'}});
        } catch (error) {
            console.log(`Error when loading all tasks by search ${search} from database: `, error);
            throw error;
        }
    }

    async addTask(task) {
        try {
            return await task.save();
        } catch (error) {
            console.log(`Error when saving task ${task} to database: `, error);
            throw error;
        }
    }
}

const taskRepository = new TaskRepository();

export {taskRepository}