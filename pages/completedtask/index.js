import mongoose from "mongoose";
import { Fragment, useEffect, useState } from "react";
import { Todo } from "../lib/model/todo";
import { connectionStr } from "../lib/db";
import CompletedTodos from "@/components/Todos/CompletedTodos";

export default function CompletedTask(props) {
  return (
    <Fragment>
      <CompletedTodos onStatusComplete={props.todos} />
    </Fragment>
  );
}

export async function getStaticProps() {
  let data = [];
  try {
    await mongoose.connect(connectionStr);
    data = await Todo.find();
  } catch (error) {
    data = { success: false };
  }

  return {
    props: {
      todos: data.map((todo) => ({
        id: todo._id.toString(),
        tasks: todo.tasks,
        status: todo.status,
      })),
    },
    revalidate: 1,
  };
}
