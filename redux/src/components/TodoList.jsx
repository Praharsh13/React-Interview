import React, { useState } from 'react'
import { useDispatch,useSelector } from 'react-redux'
import { updateTodo,deleteTodo,completed } from '../slice/todoSlice'

const TodoList = ({todo}) => {
    console.log(todo)
    const dispatch=useDispatch()
   // const todos=useSelector(state=>state.todos)
    const [update, setUpdate]=useState(todo.text)
    const [edit, setEdit]=useState(false)
    const handleEdit=()=>{
        setEdit(true)
    }

    const handleUpdate=(id,text)=>{
        dispatch(updateTodo({id,text}))
       
        setEdit(false)
        
    }

    const toggleComplete=()=>{
        dispatch(completed(todo.id))
        setEdit(false)
    }
  return (
   <>
    <div>TodoList</div>
        
            <input 
            type="text"
            value={update}
            disabled={!edit}
            onChange={(e)=>setUpdate(e.target.value)}
            />

            {!edit? (
                <button onClick={handleEdit}>Edit</button>
            ): <button onClick={()=>handleUpdate(todo.id,update)}>Save</button>
            }

            <button onClick={()=>dispatch(deleteTodo(todo.id))}>X</button>
       

       <input 
       type='checkbox'
       checked={todo.isCompleted}
       onChange={toggleComplete}
       />
   </>
  )
}

export default TodoList