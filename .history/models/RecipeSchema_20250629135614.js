    const mongoose = require('mongoose');

    const RecipeSchema = new mongoose.Schema({
        title: {
            type: String,
            required: true
        },
        ingredients: {
            type: String,
            required: true
        },
        instructions: {
            type: String,
            required: true
        },

        coverImage: {
            type: String,
            required: true
        },
        createdAt: {
            type: Date,
            default: Date.now
        }
    });

    module.exports = mongoose.model('Recipe', RecipeSchema);
