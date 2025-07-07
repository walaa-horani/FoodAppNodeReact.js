    const mongoose = require('mongoose');

    const RecipeSchema = new mongoose.Schema({
        title: {
            type: String,
            required: true
        },
        ingredients: {
            type: Array,
            required: true
        },
        instructions: {
            type: String,
            required: true
        },

        coverImage: {
            type: String,
            
        },
        createdAt: {
            type: Date,
            default: Date.now
        },

        createdBy:{
        type:mongoose.Schema.Types.ObjectId,
        ref: 'User'
    }

    });

    module.exports = mongoose.model('Recipe', RecipeSchema);
