import mongoose from "mongoose";

const todoModel = new mongoose.Schema({
    tasks:String,
    status:String
})

export const Todo = mongoose.models.todos || mongoose.model("todos", todoModel);