const Router = require("express").Router();
const DepartmentPosition = require("../controllers/departmentPosition");

Router.post("", DepartmentPosition.create);
Router.get("", DepartmentPosition.findAll);
Router.get("/:id", DepartmentPosition.findById);
Router.put("/:id", DepartmentPosition.update);

module.exports = Router;
