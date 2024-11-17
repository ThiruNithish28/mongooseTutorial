// in this we have learn about new style writing or updated style 

const mongoose = require('mongoose');
const UpdateUser = require('./models/updateUser');

// for connection we use await & async function istead of promises
run()
async function run(){
    await mongoose.connect("mongodb://localhost:27017/tutorial");                                        
    /* for store the data in old method we have create a data using object and store to DB using save()
        but here in the latest way we simple use create() method it automatically save in DB
    */
    const updateUser = await UpdateUser.create({
        name:"Siva m",
        age:20,
        email:"siva@gmail.com"
    });
    // how we change the data 
    updateUser.name="Siva m P"
    await updateUser.save() // where in older we need but for latest version you dont need  
    console.log(updateUser);
}