const Joke = require("../models/jokes.model");

//Showing all Jokes 
module.exports.findAllJokes = (request, response) => {
    Joke.find()
    .then(allJokes => response.json({results:allJokes}))
    .catch(error=> response.json({message: "Something went wrong while showing all  jokes", error: error}))
}

//showing One joke
module.exports.findOneJoke = (request, response) => {
    Joke.find({id: request.params.id})
    .then(oneJoke => response.json(oneJoke))
    .catch(error => response.json({message: "Something went wrong while showing one joke", error: error}))
}

//Creating a New Joke
module.exports.createJoke = (request, response) => {
    Joke.create(request.body)
        .then(newJoke => response.json(newJoke))
        .catch(error => res.json({message: "Something went wrong while creating a new joke", error: error}))
}

// updating a Joke 
module.exports.updateJoke = (request, response) => {
    Joke.findOneAndUpdate({id: request.params.id}, request.body)
        .then(updatedJoke => response.json(updatedJoke))
        .catch(error => response.json({message: "Something went wrong while updating a joke", error: error}))
}

//deleting a joke 
module.exports.deleteJoke = (req, res) => {
    Joke.deleteOne({id: req.params.id})
        .then(deletedJoke => res.json(deletedJoke))
        .catch(err => res.json({message: "Something went wrong while deleting a joke", err: err}))
}
