const express = require("express");
const authController  = require("../controllers/auth.controller");

const router = express.Router();

router.post('/register', authController.registerUser);

router.get('/test', async (req,res)=>{
    console.log(req.cookies);
    res.json({
        message:"Test route",
        cookie:req.cookies
    })
})

module.exports = router