const router = require("express").Router();

router.route("/").get((req, res) => {
  res.json({
    test: "Get current user details, if any"
  });
});

router.route("/login").get((req, res) => {
  res.json({
    test: "Attempt to login via whatever credentials given"
  });
});

router.route("/logout").get((req, res) => {
  res.json({
    test: "Log the current user out, if any"
  });
});

module.exports = router;

