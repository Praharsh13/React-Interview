//Redux provid esingle source of truth which is redux store which
//takes reducers


import {configureStore} from '@reduxjs/toolkit'
import todoReducer from '../slice/todoSlice'



const store=configureStore({
    reducer:todoReducer
})

export default store