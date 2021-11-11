const JokeController = require("../Controllers/jokes.controller")

module.exports = app => {

    app.get("/api/jokes", JokeController.findAllJokes);

    app.get("/api/jokes/:id", JokeController.findOneJoke);

    app.post("/api/jokes/create", JokeController.createJoke);

    app.put("/api/jokes/update/:id", JokeController.updateJoke);

    app.delete("/api/jokes/delete/:id", JokeController.deleteJoke);
}

