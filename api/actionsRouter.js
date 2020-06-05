const router = require("express").Router();
const db = require("../data/helpers/actionModel");

module.exports = router;

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