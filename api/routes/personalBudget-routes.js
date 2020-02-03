const router = require("express").Router();
const PB = require("../models/personalBudget-model");

router.get("/", (req, res) => {
  PB.find().then(budget => {
    res.status(200).json({ budget });
  });
});

module.exports = router;
