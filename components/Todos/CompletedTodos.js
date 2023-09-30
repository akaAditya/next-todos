import React, { Fragment } from "react";

const CompletedTodos = (props) => {
  const data = props.onStatusComplete.filter(
    (item) => item.status === "completed"
  );
  return (
    <Fragment>
      <div>
        <ul>
          {data.map((todo) => (
            <li key={todo._id}>{todo.tasks}</li>
          ))}
        </ul>
      </div>
    </Fragment>
  );
};
export default CompletedTodos;
