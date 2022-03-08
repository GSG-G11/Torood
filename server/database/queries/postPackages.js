const { pool } = require('../config/connection');

const addPackage = (name, customerId, image, package_date) => {
  return pool.query({
    text: 'insert into packages (name,customer_id,image,Package_date) values ($1 , $2, $3, $4) returning *;',
    values: [name, customerId, image, package_date],
  });
};

module.exports = { addPackage };
