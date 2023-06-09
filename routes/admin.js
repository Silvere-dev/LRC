const Router = require("express").Router();
const Admin = require("../controllers/admin");

Router.post("", Admin.create);
Router.get("", Admin.findAll);
Router.get("/:id", Admin.findById);
Router.put("/:id", Admin.update);

module.exports = Router;