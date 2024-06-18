// require mongoose
const mongoose = require('mongoose');
const Review = require('./review');

// creating schema
let productSchema = new mongoose.Schema({
    name:{
        type:String,
        trim:true,
        required:true
    },
    img:{
        type:String,
        trim:true
        
    },
    price:{
        type:Number,
        min:0,
        require:true
    },
    instock:{
        type:Boolean,
        required:true
    },
    desc:{
        type:String
    },
    reviews:[
        {
            type: mongoose.Schema.Types.ObjectId, // monogoose bhai saare schema me jao and usme jo  object_id hai dedo.
            ref: 'Review'  //schema jisme se dena hai 
        }

    ],
    author:{
        type:mongoose.Schema.Types.ObjectId,
        ref:'User'
    }
})

productSchema.post('findOneAndDelete' , async function(product){
    if(product.reviews.length > 0){
        await Review.deleteMany({_id:{$in:product.reviews}})
    }
})


let Product = mongoose.model('Product', productSchema);


// exporting product model to seed.js file
module.exports = Product;