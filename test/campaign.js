const request = require("supertest");
const express = require("express");
const campaignController = require("../src/controller/campaign");

const app = express();

app.use("/", campaignController);

describe("GET /", () => {
  it("returns success", done => {
    request(app)
      .get("/")
      .expect(200, done);
  });
});

