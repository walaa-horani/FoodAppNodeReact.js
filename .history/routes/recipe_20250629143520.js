const express = require('express');
const Recipe = require('../models/RecipeSchema'); // Assuming you have a Recipe model defined
const router = express.Router();


router.get("/",async(req,res)=>{
        try{

            const recipes = await Recipe.find()
            res.status(200).json(recipes);
            

        }catch(err){
            console.error(err);
            res.status(500).json({ error: 'Internal Server Error' });
        }
})

router.post('/', async (req, res) => {
  const { title, ingredients, instructions } = req.body;
    if(!title || !ingredients || !instructions) {
        return res.status(400).json({ error: 'All fields are required' });
    }
    const newRecipe = await Recipe.create({
        title,
        ingredients,
        instructions
    });
    res.status(201).json(newRecipe);
});


router.get("/:id",async(req,res)=>{
    const {id} = req.params;
    try{
        const recipe = await Recipe.findById(id)
        if(!recipe){
            return res.status(404).json({ error: 'Recipe not found' });
        }
        res.status(200).json(recipe);
    }
    catch(err){
        console.error(err);
        res.status(500).json({ error: 'Internal Server Error' });
    }
})


module.exports = router;