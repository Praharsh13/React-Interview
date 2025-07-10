import React from 'react'
import { useState } from 'react'
import axios from 'axios'
import { useEffect } from 'react'

const App = () => {

  const [jokes,setJokes]=useState([])

  useEffect(()=>{
    axios.get('/api/jokes')
    .then((response)=>{
      setJokes(response.data)
    })
  },[])


  return (
    <div>
      <h1>Here is joke on your life as a developer</h1>

      <h3>Jokes count for you {jokes.length}</h3>
      {
        jokes.map((joke,index)=>(
          <div key={joke.id}>
            <h2>{joke.title}</h2>
            <p>{joke.content}</p>
          </div>

        ))
      }
    </div>
  )
}

export default App
