import AddTodos from "@/components/Todos/AddTodos";
import ShowTodosList from "@/components/Todos/ShowTodosList";
import mongoose from "mongoose";
import { connectionStr } from "./lib/db";
import { Todo } from "./lib/model/todo";

const HomePage = (props) => {
  const PostEnteredTodos = async (enteredTasks) => {

    const response = await fetch("http://localhost:3000/api/posttodos", {
      method: "POST",
      body: JSON.stringify(enteredTasks),
      headers: {
        "Content-Type": "application/json",
      },
    });
    const data = await response.json();
    console.log(data);
  };

  return (
    <div>
      <h1>Welcome to Todos</h1>
      <AddTodos onAddTasks={PostEnteredTodos} />
      <ShowTodosList taskList={props.todos}/>
    </div>
  );
};

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
export default HomePage;
