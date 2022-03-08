// Add code below to get users info from your database
const { pool } = require('../config/connection');

const getPackages = () => {
  return pool.query('SELECT * FROM packages');
};

module.exports = { getPackages };
