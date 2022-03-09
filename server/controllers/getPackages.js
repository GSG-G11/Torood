const {getPackages} = require('../database/queries/getPackages');

const getPackagesHandler = (req, res) => {
  getPackages().then((data) => console.log(data.rows));
}

module.exports = {getPackagesHandler};