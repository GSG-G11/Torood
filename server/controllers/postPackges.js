const { addPackage } = require('../database/queries/postPackages');

const addPackageHandler = (req, res) => {
  const {name , image, date} = req.body
  addPackage(name, image, date).then((data) => res.json(data.rows));
}

module.exports = { addPackageHandler };