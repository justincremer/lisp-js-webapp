const express = require('express');

const router = express.Router();

router
	.get('/', (req, res) => res.send('root'))
	.get('/home', (req, res) => res.send('home'))
	.get('/splash', (req, res) => res.send('splash'));

module.exports = router;
