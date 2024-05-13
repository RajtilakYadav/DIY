const {Schema, model} = require("../connection")

const userSchema = new Schema({
    name: String,
    email: String,
    password: String,
    cpassword: String,
    avatar:{type: String, default:"avatar.jpeg"}
});

module.exports = model("user", userSchema)