const Router = require("express").Router();
const Role = require("../controllers/role");

Router.post("", Role.create);
Router.get("", Role.findAll);
Router.get("/:id", Role.findById);
Router.put("/:id", Role.update);

module.exports = Router;
