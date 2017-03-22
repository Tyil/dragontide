const request = require("supertest");
const express = require("express");
const app = express();

app.get("/", (req, res) => {
  res.status(200).json({
     content: "Hello world!"
  });
});

describe("GET /", () => {
  it("returns success", done => {
    request(app)
      .get("/")
      .expect(200, done);
  });
});

