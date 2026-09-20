const express = require("express");
const app = express();

const BookStore = [
    {id:1, name:"Harry Potter", author:"DevFlux"},
    {id:2, name:"Friends", author:"Vikas"},
    {id:3, name:"Bhagvatgeeta", author:"Prabhupaad"}
]

app.use(express.json());


app.get("/book",(req,res)=>{
    res.send(BookStore);
})

app.get("/book/:id",(req,res)=>{
    console.log(req.params);
    res.send("Ye lijiye")
})


app.post("/book",(req,res)=>{
    BookStore.push(req.body);
    res.send("Data saved successully")
})





app.listen(3000,()=>{
    console.log("Listening on port 3000")
})