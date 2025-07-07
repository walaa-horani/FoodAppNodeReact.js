const express = require('express');
const Recipe = require('../models/RecipeSchema'); // Assuming you have a Recipe model defined
const router = express.Router();


router.post("/",(req,res)=>{
    res.send("recipe route");
});


module.exports = router;