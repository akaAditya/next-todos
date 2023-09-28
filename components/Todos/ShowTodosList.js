import React, { Fragment, useState } from "react";
import CompletedTodos from "./CompletedTodos";

const ShowTodosList = (props) => {
  const [completedTask, setCompletedTask] = useState([]);
  const [taskStatus, setTaskStatus] = useState(true);
  
  const CompletedTodosHandler =async (id) => {
    const CompTask = props.taskList.filter((itemId) => itemId.id === id);
    console.log(CompTask, "CompTask");
    setCompletedTask((prev) => [...prev, CompTask]);
    setTaskStatus((prev) => !prev);
  };

  return (
    <Fragment>
      <ul>
        {props.taskList.map((todo) => (
          <>
            <li key={todo._id}>{todo.tasks}</li>
            <button onClick={() => CompletedTodosHandler(todo.id)}>
              Completed
            </button>
            <button>Delete</button>
          </>
        ))}
      </ul>
      <div>
        <CompletedTodos onCompletedTasks={completedTask} />
      </div>
    </Fragment>
  );
};

export default ShowTodosList;
