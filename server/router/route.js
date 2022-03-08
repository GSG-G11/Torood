const express = require('express');
const {getPackagesHandler} = require('../controllers/getPackages')
const {postStoreHandler} = require('../controllers/addStore')

const router = express.Router();

router.get('/', getPackagesHandler);

router.post('/add-store', postStoreHandler);

module.exports = router;
