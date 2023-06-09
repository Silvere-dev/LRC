const Router = require("express").Router();
const Task = require("../controllers/task");

Router.post("", Task.create);
Router.get("", Task.findAll);
Router.get("/byEmployee/:id", Task.findAllByEmployee);
Router.get("/:id", Task.findById);
Router.put("/:id", Task.update);

module.exports = Router;
