const {Schema, model} = require("../connection")

const contactschema = new Schema({
    Name: String,
    Email: String,
    Message: String,
});

module.exports = model("contact", contactschema)