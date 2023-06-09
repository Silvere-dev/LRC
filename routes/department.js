const Router = require("express").Router();
const Department = require("../controllers/department");

Router.post("", Department.create);
Router.get("", Department.findAll);
Router.get("/:id", Department.findById);
Router.put("/:id", Department.update);

module.exports = Router;
