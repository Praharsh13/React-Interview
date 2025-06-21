import React from 'react'
import { useSelector } from 'react-redux'
import TodoList from './TodoList'
const Todo = () => {
    const todos=useSelector(state=>state.todos)
    console.log("list is",todos)
  return (
    <>
      <div>TodoList</div>
<ul>
      {todos.map((todo)=>(
       <TodoList key={todo.id} todo={todo}/>
      ))}

</ul>
    </>
  )
}

export default Todo