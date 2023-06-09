const Router = require("express").Router();
const Standard = require("../controllers/standard");

Router.post("", Standard.create);
Router.get("", Standard.findAll);
Router.get("/:id", Standard.findById);
Router.put("/:id", Standard.update);

module.exports = Router;