const Router = require("express").Router();
const Country = require("../controllers/country");

Router.post("", Country.create);
Router.get("", Country.findAll);
Router.get("/:id", Country.findById);
Router.put("/:id", Country.update);

module.exports = Router;