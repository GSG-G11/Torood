const {getPackages} = require('../database/queries/getPackages');

const getPackagesHandler = (req, res) => {
  console.log('00000000')
  getPackages().then((data) => console.log(data.rows));
}

module.exports = {getPackagesHandler};