const request = require("supertest");
const express = require("express");
const controller = require("../src/controller/auth");

const app = express();

app.use("/", controller);

describe("Authentication", () => {
  describe("login", () => {
    it("returns an error when trying to use a non-existing provider");
    it("returns an error when using incorrect credentials");
    it("returns success when authentication succeeded");
    it("sets the auth token in the cookie when logged in");
  });

  describe("logout", () => {
    it("returns success");
    it("removes the cookie with the authentication token");
  });

  describe("user info", () => {
    it("returns an error if the user is not logged in");
    it("returns info about the user if the user is logged in");
  });
});

