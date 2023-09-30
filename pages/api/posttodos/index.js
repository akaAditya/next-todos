import { connectionStr } from "@/pages/lib/db";
import { Todo } from "@/pages/lib/model/todo";
import mongoose from "mongoose";

export default async function POST(req, res) {
    let data = []
    const payload =await req.body;
    try {
      await mongoose.connect(connectionStr);
      let todo = new Todo(payload);
       data = await todo.save();
    } catch (err) {}
  
    return res.status(200).json({ result:data, success: true });
  }