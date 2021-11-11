const express = require( "express" );
const mongoose = require("mongoose")

const app = express();
const port = 8000;


app.use(express.json());
app.use(express.urlencoded({extended:true}))


app.get( "/", (request, response)=> {
    response.json({message: "We are Live!"})
});

// this connect the server.js file to the  mongoose config
require( "./Server/Config/jokes.config")
require( "./server/Routes/jokes.routes")(app)


app.listen(port, ()=>{console.log( `listening on port ${port}` )})

