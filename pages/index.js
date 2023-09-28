import AddTodos from "@/components/Todos/AddTodos";
import ShowTodosList from "@/components/Todos/ShowTodosList";
import { MongoClient } from "mongodb";
import { useState } from "react";

const HomePage = (props) => {
  const [todos, setTodos] = useState([]);
  const ShowEnteredTodos = async (enteredTasks) => {
    setTodos((prev) => [...prev, enteredTasks]);
    console.log(enteredTasks.completed, "entered task completed");

    if (enteredTasks.completed === false) {
      const response = await fetch("/api/todo-database", {
        method: "POST",
        body: JSON.stringify(enteredTasks),
        headers: {
          "Content-Type": "application/json",
        },
      });
      const data = await response.json();
      console.log(data);
    }else(
      alert('Not possible')
    )
  };
  return (
    <div>
      <h1>Welcome to Todos</h1>
      <AddTodos onAddTasks={ShowEnteredTodos} />
      <ShowTodosList taskList={props.todos} />
    </div>
  );
};

export async function getStaticProps() {
  const client = await MongoClient.connect(
    "mongodb+srv://mymailaditya:AfxKwayGSPGxF16h@clusters.n5i7lds.mongodb.net/todos?retryWrites=true&w=majority"
  );
  const db = client.db();
  const todosCollection = db.collection("todos");
  const todos = await todosCollection.find().toArray();
  console.log(todos);
  client.close();

  return {
    props: {
      todos: todos.map((todo) => ({
        tasks: todo.tasks,
        id: todo._id.toString(),
      })),
    },
    revalidate: 1,
  };
}
export default HomePage;
