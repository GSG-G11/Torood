const { deletePackage } = require('../database/queries/deletePackage');

const deletePackagesHandler = (req, res) => {
   // console.log(req);
    deletePackage(req.params.id);
};

module.exports = { deletePackagesHandler };