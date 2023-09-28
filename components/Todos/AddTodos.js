import React, { Fragment, useRef } from "react";
import ShowTodosList from "./ShowTodosList";

const AddTodos = (props) => {
  const inputTask = useRef();

  const AddTodoTasksHandler = (event) => {
    event.preventDefault();
    const enteredInputTasks = inputTask.current.value;
    const todoData = {
      tasks: enteredInputTasks,
      completed: false,
    };
    props.onAddTasks(todoData);
  };
  return (
    <Fragment>
      <div>AddTodos</div>
      <div>
        <label>Make a todo list</label>
        <input type="text" placeholder="add a task" ref={inputTask} />
        <button onClick={AddTodoTasksHandler}>Add Task</button>
      </div>
    </Fragment>
  );
};

export default AddTodos;
