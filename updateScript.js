// Learning the new/updated style of writing with Mongoose

const mongoose = require("mongoose");
const UpdateUser = require("./models/updateUser");

// Use `async` and `await` for connections instead of promises
async function run() {
    try {
        // Connect to the MongoDB database
        await mongoose.connect("mongodb://localhost:27017/tutorial");
        console.log("Connected to MongoDB");

        /* Storing data in the old method:
         * Previously, we created a data object, modified it, and saved it using the `save()` method.
         * In the latest method, we use `create()`, which automatically saves the data to the database.
         */

        // Example of creating a new user and modifying it
        /*
        const updateUser = await UpdateUser.create({
            name: "Siva M",
            age: 20,
            email: "siva@gmail.com"
        });
        // Modify the user's data
        updateUser.name = "Siva M P";
        await updateUser.save();
        console.log(updateUser);
        */

        // Retrieving data from the database
        // `find()`, `findById()`, `findOne()`, and `exists()` are some of the methods available.
        const findUser = await UpdateUser.findOne({ name: "SIVA M P" }); 
        console.log("User found:", findUser);

        // New way of querying data with chaining
        /**
         * - `where(key)`: Specifies the field/key to filter.
         * - `equals(condition)`: Filters by a specific condition.
         * - `lt()` (less than): Filters by values less than the specified value.
         * - `limit(n)`: Restricts the number of results returned.
         * - `select(fields)`: Retrieves only specified fields. For example:
         *   - `select("name")`: Selects only the `name` field.
         *   - `select("age")`: Selects only the `age` field.
         */
        const newFindUser = await UpdateUser.where("name")
            .equals("SIVA M P")
            .where("age").lt(25)
            .limit(2)
            .select("name");
        console.log("Filtered users:", newFindUser);

        // Using `populate()`
        /*
         * Let's consider a scenario where we use an `ObjectId` field in the schema, for example:
         * bestFriend: {
         *     type: mongoose.SchemaTypes.ObjectId,
         *     ref: "User"
         * }
         *
         * If you want to query a user and display the details of their `bestFriend`, 
         * you can use the `populate()` method to fetch the referenced document.
         * Example:
         * const userWithFriend = await User.findById(userId).populate("bestFriend");
         * console.log(userWithFriend);
         */

        // Deleting a user
        // Example of deleting a single document
        await UpdateUser.deleteOne({ name: "SIVA M P" });
        console.log("User deleted successfully.");
    } catch (error) {
        console.error("Error occurred:", error.message);
    } finally {
        mongoose.connection.close(); // Close the connection after operations are done
    }
}

// Call the `run` function
run();
