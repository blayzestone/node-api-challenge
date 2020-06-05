const router = require("express").Router();
const projectDb = require("../data/helpers/projectModel");

module.exports = router;

router.get("/", (req, res) => {
  projectDb.get()
    .then((projects) => res.status(200).json(projects))
    .catch((err) => console.log(err));
});

router.get("/:id", (req, res) => {
  const { id } = req.params;
  projectDb.get(Number(id))
    .then((projects) => res.status(200).json(projects))
    .catch((err) => console.log(err));
});