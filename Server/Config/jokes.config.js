//This file establishes connection to database 

// Bringing in Mongoose
const mongoose = require("mongoose");

// mongoose connection 
const db_name = "jokes_DB"
mongoose.connect(`mongodb://localhost/${db_name}`, {
    useNewUrlParser: true,
    useUnifiedTopology: true
})
    .then(() => console.log("Established a connection to the database"))
    .catch(error => console.log("Something went wron while connecting to the database", error));