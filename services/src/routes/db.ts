// import express from 'express';
// import { Client } from 'pg';

// const dbRouter = express.Router();

// // const newClient = (): Client => {
// // 	return new Client({
// // 		host: 'localhost',
// // 		database: 'admin',
// // 		port: 5432,
// // 		user: 'admin',
// // 		password: 'admin',
// // 	});
// // };

// // dbRouter.get('/colors', async (_, res) => {
// // 	let result;

// // 	const client: Client = newClient();
// // 	const query = {
// // 		name: 'fetch-colors',
// // 		text: 'SELECT * FROM color_table',
// // 	};

// // 	await client.connect();
// // 	await client
// // 		.query(query)
// // 		.then((response) => (result = response.rows))
// // 		.catch((e) => console.log(e));

// // 	await client.end();

// // 	res.json(result);
// // });

// // dbRouter.get('/colors', async (_, res) => {
// // 	let result;

// // 	const client: Client = newClient();
// // 	const query = {
// // 		name: 'fetch-colors',
// // 		text: 'SELECT * FROM color_table',
// // 	};

// // 	await client.connect();
// // 	await client
// // 		.query(query)
// // 		.then((response) => (result = response.rows))
// // 		.catch((e) => console.log(e));

// // 	await client.end();

// // 	res.json(result);
// // });

// // dbRouter.post('/colors', async (req, res) => {
// // 	let result;

// // 	const client: Client = newClient();
// // 	const query = {
// // 		name: 'insert-color',
// // 		text: 'INSERT INTO color_table VALUES($1 TEXT)',
// // 		values: [req.params.value],
// // 	};

// // 	await client.connect();
// // 	await client
// // 		.query(query)
// // 		.then((response) => (result = response))
// // 		.catch((e) => console.log(e));

// // 	await client.end();

// // 	res.json(result);
// });
