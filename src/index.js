// require dependencies
const express = require("express");
const cookieParser = require("cookie-parser");

// include controllers
const campaignController = require("./controller/campaign.js");

// instantiate application
const app = express();

// apply middleware
app.use(cookieParser());

// add controllers
app.use("/campaign", campaignController);

let port = process.env.app_port || 3000;

// start the application
app.listen(port, () => console.log("Dragontide is listening on port " + port));

