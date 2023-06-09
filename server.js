require("./configs/globals");

const express = require("express");
const morgan = require("morgan");
const cors = require("cors");
const cookieParser = require("cookie-parser");
const bodyParser = require("body-parser");

const Routes = require("./routes/index");
const Models = require("./models/index");

var server = express();
const corsOption = {
  origin: "*",
};

__basedir = __dirname;

server.use(morgan("dev"));
server.use(cors(corsOption));
server.use(express.json());
server.use(cookieParser());
server.use(bodyParser.json({ limit: "50mb" }));
server.use(
  bodyParser.urlencoded({
    limit: "50mb",
    extended: true,
  })
);
server.use(express.urlencoded({ extended: true }));

Routes.init(server);

server.use(
  __origin + "/uploads",
  express.static(__basedir + "/public/resources/images/uploads")
);

Models.sequelize
  .sync({ alter: false })
  .then(() => {
    console.log("Connexion effectuée avec succès.");
  })
  .catch((error) => {
    console.log("Echec de connexion !!", error);
  });

server.listen(__port, () => {
  console.log(`Serveur en route [Port:${__port}]`);
});
