const mongoose = require("mongoose");

const connectDB = async ()=>{
    try {
        await mongoose.connect("mongodb+srv://vedantmane82_db_user:Pass123@cluster1.dz58yrm.mongodb.net/?appName=Cluster1");
        console.log("MongoDB connected successfully")
        
    } catch (error) {
        console.log("Error occured while connecting")
    }
};

module.exports = connectDB;