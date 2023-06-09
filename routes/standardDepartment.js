const Router = require("express").Router();
const StandardDepartment = require("../controllers/standardDepartment");

Router.post("", StandardDepartment.create);
Router.get("", StandardDepartment.findAll);
Router.get("/:id", StandardDepartment.findById);
Router.put("/:id", StandardDepartment.update);

module.exports = Router;
