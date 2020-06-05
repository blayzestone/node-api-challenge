const router = require("express").Router();
const db = require("../data/helpers/projectModel");

module.exports = router;

router.get("/", (req, res) => {
  db.get()
    .then((projects) => res.status(200).json(projects))
    .catch((err) => console.log(err));
});

router.get("/:id", (req, res) => {
  const { id } = req.params;
  db.get(Number(id))
    .then((projects) => res.status(200).json(projects))
    .catch((err) => console.log(err));
});

router.get("/:id/actions", (req, res) => {
  const { id } = req.params;
  db.getProjectActions(Number(id))
    .then((actions) => res.status(200).json(actions))
    .catch((err) => console.log(err));
});

router.post("/", (req, res) => {
  db.insert(req.body)
    .then((project) => res.status(201).json(project))
    .catch((err) => console.log(err));
});

router.patch("/:id", (req, res) => {
  const { id } = req.params;
  db.update(Number(id), req.body)
    .then((project) => res.status(200).json(project))
    .catch((err) => console.log(err));
});

router.delete("/:id", (req, res) => {
  const { id } = req.params;
  db.remove(Number(id))
    .then((result) => res.status(204).json(result));
});