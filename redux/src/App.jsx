import React from 'react'
import { Provider } from 'react-redux'
import store from './store/store'
import AddTodo from './components/AddTodo'
import Todo from './components/Todo'

const App = () => {
  return (
    <Provider store={store}>
       <div>Welcome to TO-DO app with redux</div>
       <AddTodo/>
       <Todo/>
    </Provider>
   
  )
}

export default App