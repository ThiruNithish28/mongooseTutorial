
# **Mongoose Tutorial**

A comprehensive tutorial project for learning and implementing Mongoose, a MongoDB object modeling tool designed to work in an asynchronous environment.

---

## **Table of Contents**

- [About the Project](#about-the-project)
- [Getting Started](#getting-started)
  - [Prerequisites](#prerequisites)
  - [Installation](#installation)
- [Project Structure](#project-structure)
- [Features](#features)
- [Usage](#usage)
  - [Basic Mongoose Concepts](#basic-mongoose-concepts)
  - [Advanced Mongoose Features](#advanced-mongoose-features)
- [Scripts and Examples](#scripts-and-examples)
- [Contributing](#contributing)
- [License](#license)

---

## **About the Project**

This project is aimed at learning and demonstrating the core features of Mongoose. It includes basic concepts such as connecting to a MongoDB database, defining schemas, creating models, and performing CRUD operations, as well as advanced topics like custom methods, statics, query helpers, virtuals, and middleware.

---

## **Getting Started**

Follow the steps below to get a local copy of this project up and running.

### **Prerequisites**

- **Node.js**: Install the latest version from [Node.js Official Website](https://nodejs.org/).
- **MongoDB**: Make sure MongoDB is installed and running locally or use a cloud service like [MongoDB Atlas](https://www.mongodb.com/atlas).

### **Installation**

1. Clone the repository:
   ```bash
   git clone https://github.com/ThiruNithish28/mongooseTutorial.git
   cd mongooseTutorial
   ```

2. Install dependencies:
   ```bash
   npm install
   ```

3. Start the MongoDB server if running locally:
   ```bash
   mongod
   ```

4. Run the scripts:
   ```bash
   node script.js
   ```

---

## **Project Structure**

```
mongooseTutorial/
├── models/                 # Schema and model definitions
│   ├── userModel.js        # User model schema
│   ├── updateUser.js       # Advanced schema with methods, statics, etc.
├── script.js               # Main script demonstrating basic CRUD operations
├── updateScript.js         # Script demonstrating updated Mongoose features
├── package.json            # Project dependencies and scripts
├── package-lock.json       # Lock file for dependencies
└── README.md               # Project documentation
```

---

## **Features**

- **Basic Mongoose Operations**:
  - Connecting to MongoDB using `mongoose.connect()`.
  - Schema definitions with validations and defaults.
  - CRUD operations (`create`, `find`, `update`, `delete`).

- **Advanced Mongoose Features**:
  - Custom instance methods and statics.
  - Query helpers.
  - Virtual properties.
  - Middleware (pre-save, post-save hooks).

---

## **Usage**

### **Basic Mongoose Concepts**

1. **Connect to MongoDB**:
   ```javascript
   mongoose.connect("mongodb://localhost:27017/tutorial")
     .then(() => console.log("Connected to MongoDB"))
     .catch(err => console.log(err));
   ```

2. **Define a Schema**:
   ```javascript
   const userSchema = new mongoose.Schema({
       name: { type: String, required: true },
       age: { type: Number, required: true }
   });
   ```

3. **Create a Model**:
   ```javascript
   const User = mongoose.model("User", userSchema);
   ```

4. **Perform CRUD Operations**:
   - Create:
     ```javascript
     const user = await User.create({ name: "John", age: 30 });
     ```
   - Read:
     ```javascript
     const users = await User.find();
     ```
   - Update:
     ```javascript
     const updatedUser = await User.findByIdAndUpdate(id, { name: "Jane" });
     ```
   - Delete:
     ```javascript
     await User.findByIdAndDelete(id);
     ```

### **Advanced Mongoose Features**

1. **Custom Instance Methods**:
   ```javascript
   userSchema.methods.sayHi = function() {
       console.log(`Hi ${this.name}!`);
   };
   ```

2. **Statics**:
   ```javascript
   userSchema.statics.findByName = function(name) {
       return this.where({ name: new RegExp(name, "i") });
   };
   ```

3. **Virtual Properties**:
   ```javascript
   userSchema.virtual("namedEmail").get(function() {
       return `${this.name} <${this.email}>`;
   });
   ```

4. **Middleware**:
   ```javascript
   userSchema.pre("save", function(next) {
       console.log("Saving document...");
       next();
   });
   ```

---

## **Scripts and Examples**

- `script.js`: Demonstrates basic Mongoose concepts like connecting, creating schemas, and performing CRUD operations.
- `updateScript.js`: Shows advanced concepts such as `create()`, custom methods, and middleware.

Run these scripts using Node.js:
```bash
node script.js
node updateScript.js
```

---

## **Contributing**

Contributions are welcome! If you have suggestions or improvements, feel free to open an issue or submit a pull request.

---

## **License**

This project is licensed under the MIT License. See the `LICENSE` file for more information.

---

### **Acknowledgements**

- [Mongoose Documentation](https://mongoosejs.com/docs/)
- [MongoDB Official Documentation](https://www.mongodb.com/docs/)

