const express = require('express');
const path = require('path');
const rootDir = require('../utils/path');

const middleware = express.static(path.join(rootDir, 'public'));

module.exports = middleware;
