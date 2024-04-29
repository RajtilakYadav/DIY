const { Schema, model } = require("../connection")

const userSchema = new Schema({
    name: String,
    email: String,
    message: String,
    rating: String
});

module.exports = model("feedback", userSchema)