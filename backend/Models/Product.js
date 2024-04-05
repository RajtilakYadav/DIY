const {Schema, model} = require("../connection")

const myschema = new Schema({
    title: String,
    description: String,
    category: String,
    price: Number,
    image: String
});

module.exports = model("product", myschema)








