const mongoose = require('mongoose');
const Product = require('./models/product');



// create array of objects
let products = [
    {
        name: 'Golgappe',
        img: 'https://media.istockphoto.com/id/1443945914/photo/pani-puri-or-gol-gappay-with-raita-sweet-sauce-and-spicy-water-served-in-dish-isolated-on.webp?b=1&s=170667a&w=0&k=20&c=YQMRgMN14glM052dkTlUu2-HSX5PQf0o1NGj7QEE4sA=',
        price:30,
        instock: true,
        desc: 'khao peyo aaish karo'
    },

    {
        name: 'Dahi-bhalle',
        img: 'https://images.unsplash.com/photo-1680764955303-81618ecb67b5?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NXx8ZGFoaSUyMGJoYWxlfGVufDB8fDB8fHww',
        price:80,
        instock: false,
        desc: 'mai hu dahi, khalo mujhe friends'
    },

    {
        name: 'Momos',
        img: 'https://media.istockphoto.com/id/1292635321/photo/veg-steam-momo-nepalese-traditional-dish-momo-stuffed-with-vegetables-and-then-cooked-and.webp?b=1&s=170667a&w=0&k=20&c=uR5RggL5jSRlFmt6-Z6fE28dAriwYvF7Jkh4L6NgrYo=',
        price:100,
        instock: true,
        desc: '5 ke veg , 5 ke non veg '
    },

    {
        name: 'rak kachori',
        img: 'https://media.istockphoto.com/id/1821735203/photo/raj-kachori-or-rajashtani-raj-kachori-chaat.webp?b=1&s=170667a&w=0&k=20&c=p4ODDfm7Nmn4gKQIuR7IDRoAchqkvsmYFKFSxglY1aE=',
        price:150,
        instock: true,
        desc: 'bada golagappa hun me'
    },
]

// seed kardo db me
async function seedDB(){
   await Product.insertMany(products);
   console.log("db seeded succesfully")
}


// exporting seedDB and require in app.js
module.exports = seedDB;
