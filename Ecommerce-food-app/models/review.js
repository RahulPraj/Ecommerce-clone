// require mongoose
const mongoose = require('mongoose');

// creating schema
let reviewSchema = new mongoose.Schema({
    rating:{
        type:Number,
        min:0,
        max:5
    },
    comment:{
        type:String,
        trim:true
    }
},
{
    timestamps: true
})

let Review = mongoose.model('Review', reviewSchema);


// exporting product model to seed.js file
module.exports = Review;