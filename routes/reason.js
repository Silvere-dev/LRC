const Router = require("express").Router();
const Reason = require("../controllers/reason");

Router.post("", Reason.create);
Router.get("", Reason.findAll);
Router.get("/:id", Reason.findById);
Router.put("/:id", Reason.update);

module.exports = Router;