import Chef from "./models/chef.js"
import Recipe from "./models/recipe.js"
import "./app.js"
import mongoose from "mongoose"


async function createRecipe () {
    const chef = await Chef.create ({
      name: "George",
      dateOfBirth: 1992,
      yearsOfExperience: 1,
      specialties: [
        { name : "Mac and Cheese", cuisine:"He's House"}
      ],
      email: "George@gmail.com"
    })

    const newRecipe = await Recipe.create ({
            recipeName: "Taco Tuesday",
            chef: chef.id,
            weight: 435.00,
            cookingTime: 12.00,
            isVegetarian: false,
            category: [
                { name: "Street food", country: "Mexico"}
            ],
        
        
        }
    )
    console.log(chef, newRecipe)
}

async function findRecipe () {

    const recipe = await Recipe.find()
        console.log(recipe),
        console.log("Total recipes in my database: ", recipe.length)
    

}

async function findChef () {

    const chef = await Chef.find()
        console.log(chef),
        console.log("Total chefs in my database: ", chef.length)
    

}

async function updateRecipe () {

    const recipe = await Recipe.updateOne ({ recipeName: "Tacos", weight: 400.00})
    console.log(recipe)
}

async function deleteRecipe () {
 
    const recipe = await Recipe.deleteOne ({ recipeName: "Taco Tuesday"}, { $set: { weight: 400.00}})
    console.log(recipe)
}


async function runTest(){
    await findRecipe();
    await findChef();
    await updateRecipe();
    await deleteRecipe();
}

runTest()