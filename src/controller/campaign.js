const router = require("express").Router();

router.route("/").get((req, res) => {
  res.json({
    test: "Nondescript"
  });
});

module.exports = router;

