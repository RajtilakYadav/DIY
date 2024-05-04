const {Schema, model} = require("../connection")

const userSchema = new Schema({
    name: String,
    email: String,
    password: String,
    cpassword: String,
    avatar:{type: String, default:"avatar.avif"}
});

module.exports = model("user", userSchema)