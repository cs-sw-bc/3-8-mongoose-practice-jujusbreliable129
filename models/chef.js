import mongoose from "mongoose";

const specialtySchema = new mongoose.Schema({
    name: {type:String, required: true},
    cuisine: String,
},
{ _id: false}
);




const chefSchema = new mongoose.Schema({
    name: {type: String, required: true},
    dateOfBirth: Number,
    yearsOfExperience: Number,
    specialties: [specialtySchema],
    email: String,
    
})



const Chef = mongoose.model("Chef", chefSchema)
export default Chef;


