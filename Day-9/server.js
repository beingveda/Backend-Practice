const express = require("express");

const app = express();

app.use(express.json());

let users = [];

//create
app.post("/create",(req,res)=>{
    let body = req.body;

    users.push(body)
    res.send("users saved successfully");
})

//read
app.get("/",(req,res)=>{
    res.send(users)
})

//delete
app.delete("/delete/:id",(req,res)=>{
    let id = Number(req.params.id);
    
    let userData = users.filter((val) => val.id !== id)
    users = userData;
    res.send("User deleted successfully")
})

app.put("/update/:id",(req,res)=>{
   
    let updateUser = user.map((val) =>
        val.id === id? {...val, body } : val
    );
    res.send(updateUser);

})


app.listen(3000,()=>{
    console.log("server is running on port 3000")
});