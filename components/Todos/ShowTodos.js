import React, { Fragment, useState } from 'react'
import AddTodos from './AddTodos'
import ShowTodosList from './ShowTodosList'

const ShowTodos = () => {
    const [ todos, setTodos] = useState([])
    const ShowEnteredTodos = (enteredTasks)=>{
        // console.log(enteredTasks);
        setTodos((prev)=>[...prev, enteredTasks])
    }
    // console.log(todos,'show todos')
  return (
    <Fragment>
        <AddTodos onAddTasks={ShowEnteredTodos}/>
        <ShowTodosList taskList={todos}/>
    </Fragment>
  )
}

export default ShowTodos