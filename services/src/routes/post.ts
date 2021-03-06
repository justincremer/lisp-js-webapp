import express from 'express';

const router = express.Router();

/**
 * list
 * get
 * create
 * update
 * upsert
 * delete
 */

router.get('/', (_, res) => res.status(200).json('post endpoint'));

export { router as postRouter };
