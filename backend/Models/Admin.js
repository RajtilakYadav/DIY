const {Schema, model} = require("../connection")

const AdminSchema = new Schema({
    name: String,
    email: {type: String, require: true, unique: true},
    password: String,
    cpassword: String
});

module.exports = model("Admin", AdminSchema)