import { connectionStr } from "@/pages/lib/db";
import { Todo } from "@/pages/lib/model/todo";
import mongoose from "mongoose";

export default async function GET(req, res) {
  let data = [];
  try {
    await mongoose.connect(connectionStr);
    data = await Todo.find();
  } catch (error) {
    data = { success: false };
  }

  return res.status(200).json({ result: data, success: true });
}


