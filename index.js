require("dotenv").config();
const express = require("express");
const server = express();
const projectRouter = require("./api/projectRouter");
const port = process.env.PORT;

server.use(express.json());

server.use("/api/projects", projectRouter);

server.get("/", (req, res) => {
  res.status(200).json({ message: "hello world" })
});

server.listen(port, () => console.log(`\nServer is listening on port: ${port}\n`));