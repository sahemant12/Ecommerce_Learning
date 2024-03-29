const app = require("./app.js");
const express = require("express");
require('dotenv').config({path:"backend/.env"});

const main = require("./config/database.js");
const productRouter = require("./routes/product.jsx");


//connecting to the db
main();

app.use(express.json());
app.use('/',productRouter.router)



//connecting to the server
app.listen(process.env.PORT,()=>{
    console.log(`server is working on PORT ${process.env.PORT}`);
})