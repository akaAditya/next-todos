import React, { Fragment, useEffect, useState } from "react";
import CompletedTodos from "./CompletedTodos";

const ShowTodosList = (props) => {
  const [completedTask, setCompletedTask] = useState([]);
  const CompletedTodosHandler = (id) => {
    const CompTask = props.taskList.filter((itemId) => itemId.id === id);
    console.log(CompTask, "CompTask");
    setCompletedTask((prev) => [...prev, CompTask]);
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
        <CompletedTodos onCompletedTasks={completedTask}/>
      </div>

    </Fragment>
  );
};

export default ShowTodosList;
