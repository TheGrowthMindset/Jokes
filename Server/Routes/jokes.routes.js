const JokeController = require("../Controllers/jokes.controller")

module.exports = app => {

    app.get("/api/jokes", JokeController.findAllJokes);

    app.get("/api/jokes/:_id", JokeController.findOneJoke);

    app.post("/api/jokes/create", JokeController.createJoke);

    app.put("/api/jokes/update/:_id", JokeController.updateJoke);

    app.delete("/api/jokes/delete/:_id", JokeController.deleteJoke);
}

