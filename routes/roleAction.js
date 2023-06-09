const Router = require("express").Router();
const RoleAction = require("../controllers/roleAction");

Router.post("", RoleAction.create);
Router.get("", RoleAction.findAll);
Router.get("/:id", RoleAction.findById);
Router.put("/:id", RoleAction.update);

module.exports = Router;