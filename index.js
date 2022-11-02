const app =require('./app')
// const dotenv = require('dotenv')

const connectDB=require('./config/db')
//handling uncaught errors
// dotenv.config({path:'backend-br/config/config.env'})

//setting up the config


//connecting to db
connectDB();  


const server =app.listen(()=>{console.log
    (`server is running at http://localhost:4000`)})


 //ha