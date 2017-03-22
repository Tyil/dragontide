// set basic variables
const port = process.env.app_port || 3000;
const controllerDir = "./controller/";

// require dependencies
const express = require("express");
const cookieParser = require("cookie-parser");

// include controllers
const controller = {
  campaign: require(controllerDir + "campaign"),
  auth: require(controllerDir + "auth")
};

// instantiate application
const app = express();

// apply middleware
app.use(cookieParser());

// add controllers
app.use("/auth", controller.auth);
app.use("/campaign", controller.campaign);

// start the application
app.listen(port, () => console.log("Dragontide is listening on port " + port));

