const router = require("express").Router();
const db = require("../data/helpers/actionModel");

module.exports = router;

router.get("/:id", (req, res) => {
  const { id } = req.params;
  db.get(Number(id))
    .then((action) => res.status(200).json(action));
});

router.post("/:id", (req, res) => {
  const { id } = req.params;
  const action = {
    ...req.body,
    project_id: Number(id),
  }

  console.log(action);

  db.insert(action)
    .then((action) => res.status(201).json(action))
    .catch((err) => console.log(err));
});

router.patch("/:id", (req, res) => {
  const { id } = req.params;
  db.update(Number(id), req.body)
    .then((updatedAction) => res.status(201).json(updatedAction))
    .catch((err) => console.log(err));
});

router.delete("/:id", (req, res) => {
  const { id } = req.params;
  db.remove(Number(id))
    .then((result) => res.status(201).json(result))
    .catch((err) => console.log(err));
});