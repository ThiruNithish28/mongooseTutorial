// First, import mongoose to connect to MongoDB
const mongoose = require("mongoose");

// Next, define a schema for the user collection
const userSchema = new mongoose.Schema({
    name: String,
    age: Number
}); 
// The `Schema()` function accepts an object as a parameter to define the structure of the documents.
// It returns a schema object that we can use to define a model.

/*
// To create a model, we use the `mongoose.model()` function.
const userModel = mongoose.model("User", userSchema);
// The `model()` function requires two parameters:
// 1. The name of the collection (e.g., "User").
// 2. The schema to be used for the collection (e.g., `userSchema`).

// Finally, export the model to use it in other files.
module.exports = userModel;
*/

// Alternatively, you can directly export the model as shown below:
module.exports = mongoose.model("User", userSchema);
