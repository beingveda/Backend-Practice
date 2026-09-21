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


app.patch("/book",(req,res)=>{
    console.log(req.body);

    const Book = BookStore.find(info=> info.id === req.body.id)

    Book.author = req.body.author;
    res.send("Patch updated");
})


app.put("/book",(req,res)=>{
    
    const Book = BookStore.find(info => info.id === req.body.id);
    Book.author = req.body.author;
    Book.name = req.body.name;

    res.send("All chnages updated successfully")
})


app.delete("/book/:id",(req,res)=>{
    const id = req.params.id;

    const index = BookStore.findIndex(info => info.id === id)

    BookStore.splice(index,1);
    res.send("successfully deleted"); 

})



app.listen(3000,()=>{
    console.log("Listening on port 3000")
})