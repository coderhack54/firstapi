const express=require("express");
const Model = require('../models/userModel')
const router=express.Router();

router.post("/add",(req,res)=>{
    // console.log("request on /add in user router");
    // res.send("response on user router on /add");

    // To extract the data from the request and save the data in the database
    const data= req.body;
    console.log(data);

    new Model(req.body).save()
    .then((data) => {
        console.log('user data saved');
        res.status(200).json({message : "success"});
    }).catch((err) => {
        console.error(500);
        res.status(500).json(err);
    });

    
    
})



router.get('/getall' , (req,res) => {

    Model.find({})
    // Model.find({username : 'sai'})
    .then((data) => {
        console.log(data);
        res.status(200).json(data);
    }).catch((err) => {
        console.error(err);
        res.status(500).json(err);
    });
    
})

    
module.exports=router;