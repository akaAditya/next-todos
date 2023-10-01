import { connectionStr } from "@/pages/lib/db";
import { Todo } from "@/pages/lib/model/todo";
import mongoose from "mongoose";

export default async function DELETE(req, res){
    const id = req.query.id;
    const filter = {_id: id};
    const payload = await req.body;
    await mongoose.connect(connectionStr);
    const result = await Todo.deleteOne(filter);
    return res.status(200).json({message:'successfully removed'})
}