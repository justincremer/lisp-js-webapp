import express from 'express';
import { User } from '../@types/user';

const router = express.Router();

const users: Array<User> = [
	{
		name: 'justin',
		age: 23,
		email: 'justin@email.com',
		phone: '1234567890',
	},
	{
		name: 'sophie',
		age: 23,
		email: 'sophie@email.com',
		phone: '4204204200',
	},
	{
		name: 'harry',
		age: 600,
		email: 'harold@email.com',
		phone: '6664206969',
	},
];

router.get('/', (_, res) => res.status(200).json(users));

router.get('/:name', (req, res) => {
	const { name } = req.params;
	const result: Array<User> = users.filter((u) => u.name === name);

	return result.length > 0
		? res.status(200).json(result)
		: res.status(400).json('User not found');
});

export default router;
