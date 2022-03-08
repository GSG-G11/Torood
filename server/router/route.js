const express = require('express');
const { getPackagesHandler } = require('../controllers/getPackages');
const { postStoreHandler } = require('../controllers/addStore');
const { getCustomersHandler } = require('../controllers/postPackges');

const router = express.Router();

router.get('/', getPackagesHandler);

router.post('/add-store', postStoreHandler);

router.get('/get-customers', getCustomersHandler);

module.exports = router;
