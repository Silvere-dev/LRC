const Router = require("express").Router();
const Employee = require("../controllers/employee");

Router.post("", Employee.create);
Router.get("", Employee.findAll);
Router.get("/:id", Employee.findById);
Router.put("/:id", Employee.update);

module.exports = Router;
