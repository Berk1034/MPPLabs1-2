import mongoose from 'mongoose'

const taskSchema = mongoose.Schema({
    name: String,
    status: String,
    date_created: String,
    time_created: String,
    file: String
});

const Task = mongoose.model('task', taskSchema);

export {Task}