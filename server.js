const express = require("express");
const helmet = require("helmet");

const userRouter = require("./user/user-router");
const logger = require("./middleware/logger.js");

const server = express();

server.use(helmet());
// converts data to JSON and attached on req.body
server.use(express.json());

server.use(logger);
server.use("/api", userRouter);

server.get("/", (req, res) => {
  res.send("<h1>Server is working!</h1>");
});

module.exports = server;
