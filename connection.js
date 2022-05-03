const mongoose = require('mongoose');

const url="mongodb+srv://AnmolSrivastava:Anmol123@cluster0.7bzrq.mongodb.net/mernwss300?retryWrites=true&w=majority";

//this operation is asynchronous
// asynchrounous task returns a promise when completed    then for success    catch for failure
mongoose.connect(url)
//then runs when the connnect is successful
.then(()=>{
    console.log("database connected");
})  
//catch runs when the connnect is unsuccessful
.catch((err) => {
    console.error(err);
});

module.exports =mongoose;
