const express = require("express");
const router = express.Router();

router.get("/hello", (req, res) => {
  res.json({
    status: "success",
    message: "Hello from kubernetes",
  });
});

router.get("/health", (req, res) => {
  res.status(200).send("OK");
});

module.exports = router;
