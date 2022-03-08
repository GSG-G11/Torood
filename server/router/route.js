const express = require('express');
const { getPackagesHandler } = require('../controllers/getPackages');
const { postStoreHandler } = require('../controllers/addStore');
const { getCustomersHandler } = require('../controllers/getCustomers');
const { addPackageHandler } = require('../controllers/postPackges');
const { addCustomerHandler } = require('../controllers/addCustomer');

const router = express.Router();

router.get('/', getPackagesHandler);

router.post('/add-store', postStoreHandler);

router.post('/add-customer', addCustomerHandler);

router.get('/get-customers', getCustomersHandler);

router.post('/add-package', addPackageHandler);

module.exports = router;
