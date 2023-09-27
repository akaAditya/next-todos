import React, { Fragment, useEffect, useState } from "react";

const CompletedTodos = (props) => {
  return (
    <Fragment>
      <div>
        <ul>
          {props.onCompletedTasks.map((todo) => (
            <li key={todo.id}>{todo.tasks}</li>
          ))}
        </ul>
      </div>
    </Fragment>
  );
};

export default CompletedTodos;
