import React, { useState } from 'react'
import {useDispatch} from 'react-redux'
import { addTodo } from '../slice/todoSlice'

const AddTodo = () => {
    const [input,setInput]=useState('')
    const dispatch=useDispatch()

    const addTodoForm=(e)=>{
       e.preventDefault()
       console.log("add",input)
       dispatch(addTodo(input))
       setInput('')
    }
  return (
    <>
    <form onSubmit={addTodoForm}>
        <input type="text"
        placeholder='What you want ?'
        value={input}
        onChange={(e)=>setInput(e.target.value)}
        />

        <button
        type="submit">
            Add Todo
        </button>
    </form>
    </>
  )
}

export default AddTodo