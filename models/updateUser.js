const mongoose = require('mongoose');

const userSchema2 = new mongoose.Schema({
    name: {
        type : String,
        required : true,
        uppercase: true,
        minLength:5
    },
    age: {
        type: Number,
        required: true
    },
    email: {
        type: String,
        required: true,
        validate: {
            validator: (value) => value.includes('@'),  // this validator function recives only the value as parameter 
            message: props => `${props.value} does not contains @` // this message function recives props which is object as parameter
        }
        // Note: This validation is work only when we use create, save method.
    },
    createAt : {
        type:Date,
        default:() => Date.now(), // Its better pratice to give function in default 
        immutable: true
    }
})

module.exports = mongoose.model("UpdateUser", userSchema2);