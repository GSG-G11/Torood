const express = require('express');
const { getPackagesHandler } = require('../controllers/getPackages');
const { postStoreHandler } = require('../controllers/addStore');
const { getCustomersHandler } = require('../controllers/getCustomers');
const { addPackageHandler } = require('../controllers/addPackges');
const { addCustomerHandler } = require('../controllers/addCustomer');
const { getStoresHandler } = require('../controllers/getStores');

const router = express.Router();

router.get('/get-packages', getPackagesHandler);

router.post('/add-store', postStoreHandler);

router.post('/add-customer', addCustomerHandler);

router.get('/get-customers', getCustomersHandler);

router.get('/get-stores', getStoresHandler);

router.post('/add-package', addPackageHandler);

module.exports = router;
