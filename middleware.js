const projectDb = require("./data/helpers/projectModel");

const validateProjectId = (req, res, next) => {
  const { id } = req.params;

  projectDb.get(Number(id))
    .then((project) => {
      return project
        ? next()
        : res.status(400).json({ error: "project with id does not exist." })
    });
}

module.exports = {
  validateProjectId,
}