const express = require("express")
const app = express()

// controllers
const campaignController = require("./controllers/campaign.js");

app.use("/campaign", campaignController);

app.listen(3000, () => console.log("Dragontide listening on port 3000!"));

