const mongoose = require("mongoose");

const user = require("./models/userModel"); // import the models
const UpdateUser = require("./models/updateUser");

//we have to connet the mongodb using connnection String
/**
 * where do we get Connection String ?
 * There are 2 ways to get (mogoDB shell, mongoDb Compass)
 * If you use shell open terminal -> type mongosh-> here you can find
 * If you use MongoDb compass open the app-> see New Collection -> there you get ConnetctionString
 */

// to connect use connect() note: while entering the connection string mention the name of the DB also
mongoose
  .connect("mongodb://localhost:27017/tutorial")
  .then(() => console.log("connected ...."))
  .catch((err) => console.log(err));

// to check the where it is connected we have use .then() it has as parameter of call back funtcionIf the connection succesfully finsihed then will be run other wise .catch() will run. Which has parameter error

// as second step we have to create a scheme in seprate file in folder "module".

/**after create schema we have to import it (which you can see in the top line).
 * And before store to database we have to  create data "user"
 * by using save() method we can store data in DB
 * save() is a promise so we have then and catch function also
 */

// const user = new User({ name: "Thiru", age: 20 });
// user
//   .save()
//   .then(() => {
//     console.log("save the data");
//   })
//   .catch((err) => console.log(err.message));

const updateUser = new UpdateUser({name:"Mohan", age:20, email:"Mohan@gmail.com"})
   .save()
   .then(()=> console.log("successFully save the data"))
   .catch(err => console.log(err.message));

    
// NOTeE : In the above we use the old method , we have the update new and esay way and style 
// to now the update and new style of wirting check out  "UpdateScript.js" file.