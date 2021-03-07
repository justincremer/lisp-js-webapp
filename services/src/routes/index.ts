import express from 'express';

import dbRouter from './db';
import userRouter from './users';

const baseRouter = express.Router();

baseRouter.get('/', (_, res) => {
	const result = { message: 'Welcome to you Express API template' };
	res.status(200).json(result);
});

export { baseRouter, dbRouter, userRouter };
