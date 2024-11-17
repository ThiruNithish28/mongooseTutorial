//first we connect with mongoose

const mongoose = require('mongoose'); 

//next we create a schemea

const userSchema =  new mongoose.Schema({
    name:String,
    age:Number
}); // the Schema() function has object and return the object
/*
// now we create a model 
const userModel = mongoose.model("User",userSchema);
// where in this model() have name and schema as 2 parameter

// now we have to export it so
module.exports = userModel; // now we can use it in external file 

*/
module.exports = mongoose.model("User",userSchema);

