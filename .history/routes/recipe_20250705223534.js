const express = require('express');
const Recipe = require('../models/RecipeSchema'); // Assuming you have a Recipe model defined
const router = express.Router();
const multer  = require('multer')


const storage = multer.diskStorage({
  destination: function (req, file, cb) {
    cb(null, './public/images') // Change this to your desired upload directory
  },
  filename: function (req, file, cb) {
    const filename = Date.now() + '-' + file.fieldname
    cb(null, filename)
  }
})

const upload = multer({ storage: storage })

router.get("/",async(req,res)=>{
        try{

            const recipes = await Recipe.find()
            res.status(200).json(recipes);
            

        }catch(err){
            console.error(err);
            res.status(500).json({ error: 'Internal Server Error' });
        }
})

router.post('/', upload.single('coverImage'),  async (req, res) => {
  const { title, ingredients, instructions } = req.body;
    if(!title || !ingredients || !instructions) {
        return res.status(400).json({ error: 'All fields are required' });
    }
    const newRecipe = await Recipe.create({
        title,
        ingredients,
        instructions,
        
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

router.put("/:id",async(req,res)=>{

 const {id} = req.params;
 const{ title, ingredients, instructions } = req.body;
   try{
    const updatedRecipe= await Recipe.findByIdAndUpdate(id,{
            title,
            ingredients,
            instructions
            
    }, { new: true, runValidators: true })

  if(!updatedRecipe){
            return res.status(404).json({ error: 'Recipe not found' });
        }

           res.status(200).json(updatedRecipe);


   } catch(err){
        console.error(err);
        res.status(500).json({ error: 'Internal Server Error' });
    }

})


router.delete("/:id",async(req,res)=>{


    const {id} = req.params;

    try{
        const deletedRecepie = await Recipe.findByIdAndDelete(id);
        if(!deletedRecepie){
            return res.status(404).json({ error: 'Recipe not found' });
        }
        res.status(200).json({ message: 'Recipe deleted successfully' });
        

    }
    catch(err){
        console.error(err);
        res.status(500).json({ error: 'Internal Server Error' });
    }
})
module.exports = router;