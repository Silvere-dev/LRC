const Router = require("express").Router();
const City = require("../controllers/city");

Router.post("", City.create);
Router.get("", City.findAll);
Router.get("/:id", City.findById);
Router.put("/:id", City.update);

module.exports = Router;