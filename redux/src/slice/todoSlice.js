//Here we create reducer funclion which is pure function

import { createSlice,nanoid } from "@reduxjs/toolkit";


const initialState={
    todos:[{id:1 , text: "hello", isCompleted:false}]
}

export const todoSlice=createSlice({
    name:'todo',
    initialState,
    reducers:{
        addTodo:(state,action)=>{
            const todo={
                id:nanoid(),
                text:action.payload,
                isCompleted:false
            
            }

            state.todos.push(todo)
        },

        deleteTodo:(state,action)=>{
            state.todos=state.todos.filter((todo)=>todo.id!==action.payload)
        },

        completed:(state,action)=>{
            state.todos=state.todos.map((todo)=>todo.id===action.payload ? {...todo,isCompleted:!todo.isCompleted}: todo)
        },

        updateTodo:(state,action)=>{
            state.todos=state.todos.map((todo)=>todo.id===action.payload.id ?{
                ...todo,text:action.payload.text
            }:todo)
        }


    }
})

export const {addTodo,deleteTodo,completed,updateTodo}=todoSlice.actions

export default todoSlice.reducer