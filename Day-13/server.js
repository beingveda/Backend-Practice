const dotenv = require("dotenv");
const app = require("./src/app");
const connectDB = require("./src/config/db");

dotenv();
connectDB();

app.listen(3000,()=>{
    console.log("server is running on port 3000")
})