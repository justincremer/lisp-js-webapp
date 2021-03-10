import express from 'express';

import { userRouter } from './user';
import { postRouter } from './post';

const router = express.Router();

router.route('/').get((_, res) => {
	const result = { message: 'Welcome to you Express API template' };
	res.status(200).json(result);
});

router.use('/user', userRouter);
router.use('/post', postRouter);

export { router };
