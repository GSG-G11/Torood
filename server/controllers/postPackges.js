const { addPackage } = require('../database/queries/postPackages');

const addPackageHandler = (req, res) => {
  const { name, customer_name, store, image, date } = req.body;
  console.log(req.body);
  addPackage(name, customer_name, store, image, date).then((data) =>
    res.json(data.rows)
  );
};

module.exports = { addPackageHandler };
