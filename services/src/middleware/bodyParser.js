const bodyParser = require('body-parser');

const middleware = bodyParser.urlencoded({ extended: false });

module.exports = middleware;
