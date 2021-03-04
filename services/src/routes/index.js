const express = require('express');
const path = require('path');
const rootDir = require('../utils/path');

const router = express.Router();

const adminRoutes = require('./admin.js');

router.use('/admin', adminRoutes);
router.use((req, res, next) => res.status(400).send('Page not found'));

module.exports = router;
