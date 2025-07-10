import express from 'express'
import cors from 'cors'
const app= express()


// app.get("/",(req,res)=>{
//     res.send('Server is ready')
// })

app.use(cors({
    origin:"http://localhost:5173/",
    methods:['GET','POST','PUT','DELETE'],
    credentials:true
}))
app.get("/api/jokes",(req,res)=>{
    const jokes = [
        {
          id: 1,
          title: "Why JavaScript developers wear glasses",
          content: "Because they don't C#."
        },
        {
          id: 2,
          title: "Frontend vs Backend",
          content: "Why did the frontend developer break up with the backend developer? Because they didn’t get a response!"
        },
        {
          id: 3,
          title: "404 Humor",
          content: "I tried to tell a joke about a missing file... but it never found its path."
        },
        {
          id: 4,
          title: "Promises in JavaScript",
          content: "Why did the promise go to therapy? It couldn't handle rejection."
        },
        {
          id: 5,
          title: "React Dev’s Dream",
          content: "A React developer walks into a bar... but nothing renders."
        }
      ]
      res.send(jokes)
})

const PORT=3000

app.listen(PORT,()=>{
    console.log(`Server is running on ${PORT}`)
})

