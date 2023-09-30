import { connectionStr } from "@/pages/lib/db";
import { Todo } from "@/pages/lib/model/todo";
import mongoose from "mongoose";

export default async function PUT(req, res){
    const id = req.query.updatetodos
    const filter = {_id:id};
    const payload = await req.body;
    console.log(payload);
    await mongoose.connect(connectionStr);

    const result = await Todo.findOneAndUpdate(filter, payload)
    return res.json({result, success:true})
}