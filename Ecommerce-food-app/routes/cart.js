const express = require('express');
const { isLoggedIn } = require('../middleWare');
const router = express.Router();

router.post('/user/:productId/add', isLoggedIn, (req,res)=>{
    let {productId} = req.params;
    let userId = req.user._id;
})

module.exports = router;