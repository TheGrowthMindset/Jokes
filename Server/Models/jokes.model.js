const mongoose = require("mongoose");

const JokeSchema = new mongoose.Schema({
    "setup": {
        type: String,
        required: [true, "Come on every great joke needs a setup "],
        minlength: [10, "Setup must be at least 10 characters long"]
    },
    "punchline": {
        type: String,
        required: [true, " You cannot set it up perfectly and not punch it out the park..."],
        minlength: [3, "Punchline must be at least 3 characters long!"]
    }
})

const Joke = mongoose.model("Joke", JokeSchema);

module.exports = Joke;
