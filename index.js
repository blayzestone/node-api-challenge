require("dotenv").config();
const express = require("express");
const server = express();
const projectRouter = require("./api/projectRouter");
const actionsRouter = require("./api/actionsRouter");
const port = process.env.PORT;

server.use(express.json());

server.use("/api/projects", projectRouter);
server.use("/api/actions", actionsRouter);

server.get("/", (req, res) => {
  res.status(200).json({ message: "hello world" })
});

server.listen(port, () => console.log(`\nServer is listening on port: ${port}\n`));