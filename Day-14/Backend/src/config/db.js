const mongoose = require("mongoose");

const connectDB = async () => {
    try {
        await mongoose.connect(process.env.mongo_uri);
        console.log("MongoDB connected Successfully");
    } catch (error) {
        console.log("Error at DB connection", error.message)
    }
}

module.exports = connectDB;