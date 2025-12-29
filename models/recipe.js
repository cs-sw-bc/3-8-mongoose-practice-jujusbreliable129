import mongoose from "mongoose";


const categorySchema = new mongoose.Schema ({
     name: {type:String, required: true},
     country: String,
},
{_id: false});



const recipeSchema = new mongoose.Schema({
    recipeName: {type: String, required: true},
    chef: {type: mongoose.Schema.Types.ObjectId, ref:"Chef", required: true},
    weight: Number,
    cookingTime: {type: Number, required: true},
    isVegetarian: {type:Boolean, default:false},
    category: [categorySchema],


},
 {timestamps: true} );

 const Recipe = mongoose.model("Recipe", recipeSchema)
 export default Recipe; 