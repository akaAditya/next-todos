import React, { Fragment } from "react";

const ShowTodosList = (props) => {
  const data = props.taskList.filter((item) => item.status === "incomplete");

  const todosUpdateData = props.taskList.map((todo) => {
    return {
      tasks: todo.tasks,
      status: todo.status,
    };
  });
  const CompletedTodosHandler = async (id) => {
    const response = await fetch(`/api/todos/${id}`, {
      method: "PUT",
      body: JSON.stringify({ ...todosUpdateData, status: "completed" }),
      headers: {
        "Content-Type": "application/json",
      },
    });
    const data = await response.json();
    console.log(data, "updated successfully");
  };

  const DeleteTodosHandler = async (id) => {
    const response = await fetch(`/api/removetodos/${id}`,{
      method: 'DELETE',
    })
    const data = await response.json();
    console.log(data)
  }
  return (
    <Fragment>
      <ul>
        {data.map((todo) => (
          <>
            <li key={todo.id}>{todo.tasks}</li>
            <button onClick={() => CompletedTodosHandler(todo.id)}>
              Completed
            </button>
            <button onClick={()=>DeleteTodosHandler(todo.id)}>Delete</button>
          </>
        ))}
      </ul>
    </Fragment>
  );
};

export default ShowTodosList;
