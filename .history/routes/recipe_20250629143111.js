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


module.exports = router;