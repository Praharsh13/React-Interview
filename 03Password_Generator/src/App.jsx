import { useState ,useCallback,useRef,useEffect} from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'


function App() {
  const [password,setPassword] = useState()
  const [number,setNumber]=useState(false)
  const [char, setChar]=useState(false)
  const [length,setLength]=useState(8)
//Using useRef hook to tahe reference of password
  const passwordRef=useRef(null)
//Using useCallback hook to genereate password
  const passwordGenerator=useCallback(()=>{
    let pass='';
    let str='ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz'
    if(number){
      str+='1234567890'
    }
    if(char){
      str+="!@#$%^&*-_+=[]{}~`"
    }

    for(let i=1;i<=length;i++){
       let word=Math.floor(Math.random()*str.length+1)
       pass+=str.charAt(word)
    }

    setPassword(pass)
  },[number,char,length,setPassword])

//Using useeffect hook to show password at the initial render of screen and change when it changes
useEffect(()=>{
  passwordGenerator()
},[length,char,number,passwordGenerator])

//Button function to copy
const copyPasswordToClipboard=useCallback(()=>{
  passwordRef.current?.select()
  window.navigator.clipboard.writeText(password)
},[password])
  


  return (
    <>
      <div className="w-full max-w-md mx-auto shadow-md rounded-lg px-4 py-3 my-8 bg-gray-800 text-orange-500">
      <h1 className='text-white text-center my-3'>Password generator</h1>
    <div className="flex shadow rounded-lg overflow-hidden mb-4">
        <input
            type="text"
            value={password}
            className="outline-none w-full py-1 px-3"
            placeholder="Password"
            readOnly
            ref={passwordRef}
        />
        <button
        onClick={copyPasswordToClipboard}
        className='outline-none bg-blue-700 text-white px-3 py-0.5 shrink-0'
        >copy</button>
        
    </div>
    <div className='flex text-sm gap-x-2'>
      <div className='flex items-center gap-x-1'>
        <input 
        type="range"
        min={6}
        max={100}
        value={length}
         className='cursor-pointer'
         onChange={(e) => {setLength(e.target.value)}}
          />
          <label>Length: {length}</label>
      </div>
      <div className="flex items-center gap-x-1">
      <input
          type="checkbox"
          defaultChecked={number}
          id="numberInput"
          onChange={()=>setNumber((prev)=>!prev)}
      /> 
      <label htmlFor="numberInput">Numbers</label>
      </div>
      <div className="flex items-center gap-x-1">
          <input
              type="checkbox"
              defaultChecked={char}
              id="characterInput"
              onChange={() => {
                  setChar((prev) => !prev )
              }}
          />
          <label htmlFor="characterInput">Characters</label>
      </div>
    </div>
</div>   

    </>
  )

            }
export default App
