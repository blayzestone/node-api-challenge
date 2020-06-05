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

router.post("/", (req, res) => {
  projectDb.insert(req.body)
    .then((project) => res.status(201).json(project))
    .catch((err) => console.log(err));
});

router.patch("/:id", (req, res) => {
  const { id } = req.params;
  projectDb.update(Number(id), req.body)
    .then((project) => res.status(200).json(project))
    .catch((err) => console.log(err));
});

router.delete("/:id", (req, res) => {
  const { id } = req.params;
  projectDb.remove(Number(id))
    .then((result) => res.status(201).json(result));
});