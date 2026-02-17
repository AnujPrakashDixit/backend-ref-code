const express = require("express");
const jwt = require("jsonwebtoken")

const router = express.Router();


router.post("/create", (req, res) => {

    console.log(req.cookies);
    const token = req.cookies.token;

    if (!token) {
        return res.status(401).json({
            message: "Unauthorized"
        })
    }
    try {
        jwt.verify(token, process.env.JWT_SECRET)
    }catch(err){
        return res.status(401).json({
            message:"Unauthorized"
        })
    }
    res.send("Post Created Successfully");
})

module.exports = router