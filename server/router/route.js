const express = require('express');
const getPackages = require('../database/queries/getPackages');
const router = express.Router();

router.get('/', (req, res) => {
  getPackages().then((data) => res.json(data.rows));
});

module.exports = router;
