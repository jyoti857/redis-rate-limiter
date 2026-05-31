const express = require("express");
const rateLimiter = require("./middileware/rateLimiter");
const routes = require("./routes/api");

const app = express();
app.use(express.json());
app.use(rateLimiter);
app.use("/", routes);

module.exports = app;
