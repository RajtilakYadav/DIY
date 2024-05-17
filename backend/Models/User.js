const {Schema, model} = require("../connection")

const userSchema = new Schema({
    name: String,
    email: {type: String, require: true, unique: true},
    password: String,
    cpassword: String,
    avatar:{type: String, default:"avatar.jpeg"}
});

module.exports = model("usercollection", userSchema)