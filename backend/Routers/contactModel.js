const express = require('express');
const router = express.Router();
const Model = require("../Models/contactModel")



router.post("/add", (req, res) => {
    console.log(req.body);
    new Model(req.body).save()

    .then((result) => {
       res.json(result)
    }).catch((err) => {
        console.log(err)
        res.status(500).json(err);
    });

})








module.exports = router;