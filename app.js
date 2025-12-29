import mongoose from "mongoose";

const MONGO_URI1 = "mongodb://localhost:27017/RESTAURANT"


mongoose.connect(MONGO_URI1)
.then(()=> console.log("Connected successfully to database"))
.catch(err=>console.log(err));