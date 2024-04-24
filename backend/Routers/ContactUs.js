const express = require('express');
const router = express.Router();
const Model = require("../Models/ContactUs")



router.post("/add", (req, res) => {
    console.log(req.body);
    new Model(req.body).save()

    .then((result) => {
       res.json(result)
    }).catch((err) => {
        console.log(err)
        res.status(500).json(err);
    });

    router.get('/getall',(req,res)=>{
        //emptey brackets will give all the data from the database
        Model.find({})
        .then((result)=>{
            res.json(result)
        }) .catch((err) =>{
            console.error(err)
            res.status(500).json(err)
        })
    })
});
router.post('/authenticate',(req,res)=>{
    Model.findOne(req.body)
    .then((result) => { 
    if(result) res.json(result);
    else res.status(400).json({message:'login failed'})
    }).catch((err) =>{
        console.log(err);
        res.status(500).json(err);
        });
})

router.delete("/delete/:id", (req,res) => {
    Model.findByIdAndDelete(req.params.id)
    .then((result) => {
        res.status(200).json(result);
    }).catch((err) => {
        res.status(500).json(err)
        console.log(err);
    });
});





module.exports = router;