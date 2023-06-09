const Router = require("express").Router();
const Absence = require("../controllers/absence");

Router.post("", Absence.create);
Router.get("", Absence.findAll);
Router.get("/:id", Absence.findById);
Router.get("/byEmployee/:EmployeeId", Absence.findAllByEmployee);
Router.put("/:id", Absence.update);

module.exports = Router;
