const Absence = require("./absence");
const Action = require("./action");
const Admin = require("./admin");
const Attendance = require("./attendance");
const City = require("./city");
const Country = require("./country");
const Department = require("./department");
const DepartmentPosition = require("./departmentPosition");
const Employee = require("./employee");
const Reason = require("./reason");
const Role = require("./role");
const RoleAction = require("./roleAction");
const Standard = require("./standard");
const StandardDepartment = require("./standardDepartment");
const Task = require("./task");

exports.init = (server) => {
  server.use(__origin + "/absence", Absence);
  server.use(__origin + "/action", Action);
  server.use(__origin + "/admin", Admin);
  server.use(__origin + "/attendance", Attendance);
  server.use(__origin + "/city", City);
  server.use(__origin + "/country", Country);
  server.use(__origin + "/department", Department);
  server.use(__origin + "/departmentPosition", DepartmentPosition);
  server.use(__origin + "/employee", Employee);
  server.use(__origin + "/reason", Reason);
  server.use(__origin + "/role", Role);
  server.use(__origin + "/roleAction", RoleAction);
  server.use(__origin + "/standard", Standard);
  server.use(__origin + "/standardDepartment", StandardDepartment);
  server.use(__origin + "/task", Task);

  server.use(__origin + "/doc", (req, res) => {
    res.sendFile(__basedir + "/docs.html");
  });
  server.use(__origin + "/queries", (req, res) => {
    res.sendFile(__basedir + "/queries.md");
  });
};
