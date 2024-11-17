const mongoose = require("mongoose");

const userSchema2 = new mongoose.Schema({
    name: {
        type: String,
        required: true,
        uppercase: true,
        minLength: 5
    },
    age: {
        type: Number,
        required: true
    },
    email: {
        type: String,
        required: true,
        validate: {
            validator: (value) => value.includes("@"), // Validator function receives the value as a parameter
            message: (props) => `${props.value} does not contain @` // Message function receives `props` as a parameter
        }
        // Note: This validation works only when using `create` or `save` methods.
    },
    createAt: {
        type: Date,
        default: () => Date.now(), // It's better practice to use a function in `default`
        immutable: true // Prevents modification of this field
    }
});

// Advanced concepts in schema

/** 
 * 1. Add methods/functions:
 * Instance methods can be added to the schema. 
 * `sayHi` is a custom method that can be called on a document instance.
 * 
 * Note: Do not use arrow functions here because `this` needs to refer to the specific document instance.
 */
userSchema2.methods.sayHi = function () {
    console.log(`Hi ${this.name}, how are you?`);
};

/**
 * 2. Create custom static methods:
 * `statics` methods apply globally to the model, not just specific instances.
 * For example, `findByName` will search for documents by a name (case-insensitive).
 */
userSchema2.statics.findByName = function (name) {
    return this.where({ name: new RegExp(name, "i") }); // "i" flag makes the search case-insensitive
};

/**
 * 3. Create custom query helpers:
 * Query helpers act like methods for chaining additional queries.
 * For example, `byName` allows filtering by name while chaining other methods.
 */
userSchema2.query.byName = function (name) {
    return this.where({ name: new RegExp(name, "i") });
};

/**
 * 4. Virtual properties:
 * Virtuals define additional properties that are derived from the actual schema fields.
 * These are not stored in the database but are computed when you access them.
 */
userSchema2.virtual("namedEmail").get(function () {
    return `${this.name} <${this.email}>`;
});

/**
 * 5. Middleware:
 * Middleware functions can be applied at different stages of the document's lifecycle (e.g., pre-save, post-save).
 * 
 * - `pre`: Runs before the document is saved.
 * - `post`: Runs after the document is saved.
 * 
 * In this example, we use `pre` middleware to call `sayHi` before saving.
 */
userSchema2.pre("save", function (next) {
    this.sayHi(); // Call the custom method
    next(); // Always call `next()` to proceed to the next middleware or save operation
});

module.exports = mongoose.model("UpdateUser", userSchema2);
