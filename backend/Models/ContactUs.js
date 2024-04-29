const {Schema, model} = require("../connection")

const userSchema = new Schema({
    name: String,
    email: String,
   message:String
});

module.exports = model("contact", userSchema)