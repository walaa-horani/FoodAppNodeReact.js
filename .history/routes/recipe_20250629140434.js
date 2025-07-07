const express = require('express');
const Recipe = require('../models/RecipeSchema'); // Assuming you have a Recipe model defined
const router = express.Router();


router.post(async (req, res) => {
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