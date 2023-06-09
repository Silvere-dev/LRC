const Router = require("express").Router();
const Attendance = require("../controllers/attendance");

Router.post("", Attendance.create);
Router.get("", Attendance.findAll);
Router.get("/:id", Attendance.findById);
Router.get("/byEmployee/:id", Attendance.findAllByEmployee);
Router.put("/:id", Attendance.update);

module.exports = Router;
