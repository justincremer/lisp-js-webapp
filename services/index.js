const express = require('express');
const { logger, static, bodyParser } = require('./src/middleware');
const router = require('./src/routes');

const app = express();

const PORT = 8000;

app.use(bodyParser);
// app.use(static);
app.use(logger);
app.use(router);

app.listen(PORT);

console.log(`Listening on http://localhost:${PORT}`);
