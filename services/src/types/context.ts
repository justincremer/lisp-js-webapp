import { EntityManager } from 'typeorm';
import { Request, Response } from 'express';
import { Session } from 'express-session';

type Context = {
	em: EntityManager;
	req: Request & { session?: Session & { userId?: number } };
	res: Response;
};

export { Context };
