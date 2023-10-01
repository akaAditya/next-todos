import React, { Fragment } from "react";

const CompletedTodos = (props) => {
  const data = props.onStatusComplete.filter(
    (item) => item.status === "completed"
  );

  const DeleteTodosHandler = async (id) => {
    const response = await fetch(`/api/removetodos/${id}`, {
      method: "DELETE",
    });
    const data = await response.json();
    console.log(data);
  };
  return (
    <Fragment>
      <div>
        <ul>
          {data.map((todo) => (
            <>
              <li key={todo.id}>{todo.tasks}</li>
              <button onClick={() => DeleteTodosHandler(todo.id)}>
                Delete
              </button>
            </>
          ))}
        </ul>
      </div>
    </Fragment>
  );
};
export default CompletedTodos;
