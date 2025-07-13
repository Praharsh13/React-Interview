import express from "express"

const app=express()




app.get("/api/products",(req,res)=>{
    const products = [
        {
          id: 1,
          productName: "Wood",
          description: "High-quality natural wood suitable for furniture and construction.",
          image: "https://images.unsplash.com/photo-1568605114967-8130f3a36994?auto=format&fit=crop&w=800&q=60"
        },
        {
          id: 2,
          productName: "Metal",
          description: "Durable metal perfect for industrial and household use.",
          image: "https://images.unsplash.com/photo-1616627984239-cb2e2f5aa8c5?auto=format&fit=crop&w=800&q=60"
        },
        {
          id: 3,
          productName: "Glass",
          description: "Clear and toughened glass for windows, doors, and tables.",
          image: "https://images.unsplash.com/photo-1583416752745-8f6d34c4b5dc?auto=format&fit=crop&w=800&q=60"
        },
        {
          id: 4,
          productName: "Plastic",
          description: "Lightweight and versatile plastic used in a variety of products.",
          image: "https://images.unsplash.com/photo-1612433992853-5ae9ed08fa0a?auto=format&fit=crop&w=800&q=60"
        },
        {
          id: 5,
          productName: "Plasma",
          description: "Elegant marble stone used for flooring and countertops.",
          image: "https://images.unsplash.com/photo-1560185891-9a7055e23e13?auto=format&fit=crop&w=800&q=60"
        }
      ];

      if(req.query.search){
        const filterProducts=products.filter((product)=>(
            product.productName.toLowerCase().includes(req.query.search.toLocaleLowerCase())
        ))
        res.send(filterProducts)
        return
      }


    setTimeout(()=>{

        res.send(products)
      
    },3000)
    
      
})







const PORT= 3000;

app.listen(PORT,()=>{
    console.log(`Server is running on PORT : ${PORT}`)
})