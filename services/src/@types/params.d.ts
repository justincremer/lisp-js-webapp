import { Request, Response, NextFunction } from 'express';

interface Params {
	err?: any;
	req: Request;
	res: Response;
	next?: NextFunction;
}

export { Params };
