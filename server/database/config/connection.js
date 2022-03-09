require('env2')('.env');
const { Pool } = require('pg');

let DB_Url = '';
if (process.env.NODE_ENV === 'development') {
  DB_Url = process.env.DB_URL_DEV
}else if(process.env.NODE_ENV  === 'test'){
  DB_Url = process.env.DB_URL_TEST
}else if(process.env.NODE_ENV === 'Production'){
  DB_Url = process.env.DB_URL_PROD
}else{
  throw new Error('ERROR IN DATABASE CONNECTION!');
}

const sql = {
  connectionString: DB_Url,
  ssl: false,
};

const pool = new Pool(sql);

module.exports = { pool };
