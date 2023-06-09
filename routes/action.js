const Router = require("express").Router();
const Action = require("../controllers/action");

Router.post("", Action.create);
Router.get("", Action.findAll);
Router.get("/:id", Action.findById);
Router.put("/:id", Action.update);

module.exports = Router;