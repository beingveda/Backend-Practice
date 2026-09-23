const express = require("express");

const app = express();

//CRUD: create read update delete
//Database : array

let FoodMenu = [
    {id:1, food:"Chowmin", category:"veg", price:200},
    {id:2, food:"Butter-naan", category:"veg", price:40},
    {id:3, food:"Chicekn", category:"non-veg", price:200},
    {id:4, food:"Mutton", category:"non-veg", price:480},
    {id:5, food:"Modak", category:"veg", price:50},
    {id:6, food:"Chai", category:"veg", price:10},
    {id:7, food:"Rajma", category:"veg", price:180},
    {id:8, food:"Roti", category:"veg", price:10},
    {id:9, food:"Lollipap", category:"non-veg", price:90},
    {id:10, food:"Paneer", category:"veg", price:400}
]
 
let AddToCart = [];
//user ka jo bhi food hai wo idhar jayega

app.use(express.json());


app.get("/food",(rwq,res)=>{
    res.send(FoodMenu);
})

app.post("/admin",(req,res)=>{

    // Add item to food menu 
    // Authenticate karna padega ki kya ye admin hi hai 
    // dummy code
    let token = 'ABCDF'
    let Access = token = "ABCD" ?1:0;

    if(Access){
        FoodMenu.push(req.body);
        res.status(201).send("Item Added Successfully");
    }
    else{
        res.status(202).send("Items Can't be added");
    }



})

app.delete("/admin/:id",(req,res)=>{

    // Add item to food menu 
    // Authenticate karna padega ki kya ye admin hi hai 
    // dummy code
    let token = 'ABCDF'
    let Access = token = "ABCD" ?1:0;

    if(Access){
        let id = parseInt(req.params.id);
        
        let item;
       let index = FoodMenu.findIndex(item => item.id === id);

       if(item===-1){
        res.send("Item doesn't exist")

       }else{
        FoodMenu.splice(index,1);
        res.send("successfully deleted");
       }
    }
    else{
        res.status(403).send("No Permission")
    }
})

app.patch("/admin", (req, res) => {

    let token = "ABCD";

    let access = token === "ABCD";

    if (!access) {
        return res.status(403).send("No permission");
    }

    const id = req.body.id;

    const foodData = FoodMenu.find(item => item.id === id);

    if (!foodData) {
        return res.status(404).send("Item does not exist");
    }

    if (req.body.food) {
        foodData.food = req.body.food;
    }

    if (req.body.category) {
        foodData.category = req.body.category;
    }

    if (req.body.price) {
        foodData.price = req.body.price;
    }

    res.send("Successfully Updated");
});





app.listen(3000,()=>{
    console.log("listening on port 3000")
})