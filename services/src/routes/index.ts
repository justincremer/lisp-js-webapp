import express from 'express';

const router = express.Router();

router.get('/', (_, res) => {
	const result = { message: 'Welcome to you Express API template' };
	res.status(200).json(result);
});

export default router;
