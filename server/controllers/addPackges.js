const { addPackage } = require('../database/queries/postPackages');

const addPackageHandler = (req, res) => {
  const { name, customer_name, store, image, date, price } = req.body;
  addPackage(name, customer_name, store, image, date, price)
    .then((data) => res.json(data.rows))
    .then(res.redirect('/get-packages'));
};

module.exports = { addPackageHandler };
