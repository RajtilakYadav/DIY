const {Schema, model} = require("../connection")

const AdminSchema = new Schema({
    name: String,
    email: String,
    password: String,
    cpassword: String
});

module.exports = model("Admin", AdminSchema)