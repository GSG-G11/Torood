const { pool } = require('../config/connection');

const addPackage = (name , image, package_date) => {
  return pool.query({
    text:'insert into packages (name,image,Package_date) values ($1 , $2, $3) returning *;',
    values:[name , image, package_date]
  });
};

module.exports = {addPackage};