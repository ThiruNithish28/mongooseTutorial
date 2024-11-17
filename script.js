const mongoose = require("mongoose");

const User = require("./models/userModel"); // Import the user model
const UpdateUser = require("./models/updateUser"); // Import the updateUser model

// Connect to MongoDB using the connection string
/**
 * Where do we get the Connection String?
 * There are 2 ways to find it (via MongoDB Shell or MongoDB Compass):
 * 1. MongoDB Shell: Open your terminal and type `mongosh` -> The connection string will be displayed there.
 * 2. MongoDB Compass: Open the app -> Navigate to your desired database -> Find the connection string under "Connect".
 */

// Use mongoose's `connect()` method to connect to MongoDB
// Note: While entering the connection string, include the database name as well.
mongoose
  .connect("mongodb://localhost:27017/tutorial")
  .then(() => console.log("Connected to MongoDB..."))
  .catch((err) => console.log("Connection error:", err));

// `connect()` returns a promise. If the connection is successful, the `.then()` callback is executed.
// Otherwise, `.catch()` will handle the error.

// Step 2: Create a schema in a separate file inside the "models" folder.

/**
 * After creating the schema, we need to import it (as shown at the top).
 * To store data in the database, create a new instance of the model and use the `save()` method.
 * The `save()` method is a promise, so you can chain `.then()` and `.catch()` to handle success or errors.
 */

// Example: Creating a user instance and saving it to the database
// const user = new User({ name: "Thiru", age: 20 });
// user
//   .save()
//   .then(() => {
//     console.log("Data saved successfully.");
//   })
//   .catch((err) => console.log("Error saving data:", err.message));

// Example: Creating and saving an updated user
const updateUser = new UpdateUser({ name: "Mohan", age: 20, email: "Mohan@gmail.com" });
updateUser
  .save()
  .then(() => console.log("Data saved successfully."))
  .catch((err) => console.log("Error saving data:", err.message));

// NOTE: The above example uses the old method of writing Mongoose queries.
// For the updated and modern syntax, refer to the "UpdateScript.js" file.
