require('env2')('.env');

const { Pool } = require('pg');

if (!process.env.DB_URL) {
  throw new Error('ERROR IN DATABASE CONNECTION!');
}
const sql = {
  connectionString: process.env.DB_URL,
  ssl: false,
};

const pool = new Pool(sql);

module.exports = { pool };
