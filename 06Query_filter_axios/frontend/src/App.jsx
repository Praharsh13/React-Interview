import { useState,useEffect } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import axios from 'axios'

function App() {
  const [product,setProduct]=useState([])
  const [error,setError]=useState(false)
  const[loading,setLoading]=useState(false)
  const [search,setSearch]=useState();

  useEffect(()=>{
    // as for each search our api will call but the calls before final call is of no worth , so we give axios the power 
    // to remove those calls, we use for race condition
    const controller=new AbortController()

    ;(async()=>{
      try {
        setLoading(true)
        setError(false)
        const response= await axios.get('/api/products?search=' + search,
        {
          signals:controller.signal
        })
        console.log("datais",response.data)
        setProduct(response.data)
        setLoading(false)
      } catch (error) {
        if(axios.isCancel(error)){
          return
        }
        console.log(error.message)
        setError(true)
        
        
      }
    })()

    //cleanup code for controller
      return ()=>{
        controller.abort()
      }
  },[search])

  return (
    <>

    <h1>See all your Products</h1>
    {error && <h2>Something went wrong</h2>}

    {loading && <h2>Wait a sec...</h2>}

    <input type="text" placeholder='search'
    value={search}
    onChange={(e)=>setSearch(e.target.value)}/>

    <h2>Total products {product.length}</h2>

    <ul>
    {product.map((p,i)=>(
     
        <li key={p.id}>
          <p>{p.productName}</p>
          <p>{p.description}</p>
          <img src={p.image} alt={p.title}></img>
        </li>
       
    
    ))}
       </ul> 
    </>
  )
}

export default App
