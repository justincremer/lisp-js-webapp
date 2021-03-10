import 'reflect-metadata';
import express from 'express';
import { ApolloServer } from 'apollo-server-express';

import redis from 'redis';
import session from 'express-session';
import connectRedis from 'connect-redis';

import { createConnection } from 'typeorm';
import { buildSchema } from 'type-graphql';
import { PostResolver, UserResolver } from './resolvers';

import http from 'http';
import logger from 'morgan';
import cookieParser from 'cookie-parser';

import { router } from './routes';
import { apiConf, dbConf, ormConf, redisConf } from './config';
import { Context } from './types';

const app = async (): Promise<void> => {
	const app = express();

	const port = apiConf.port ?? '8000';
	app.set('port', port);

	const connection = await createConnection(ormConf);
	connection.runMigrations();

	const RedisStore = connectRedis(session);
	const redisClient = redis.createClient();

	const apolloServer = new ApolloServer({
		schema: await buildSchema({
			resolvers: [UserResolver, PostResolver],
			validate: false,
		}),
		context: ({ req, res }): Context => ({
			em: connection.manager,
			req,
			res,
		}),
	});

	app.use(logger('dev'))
		.use(express.json())
		.use(express.urlencoded({ extended: true }))
		.use(cookieParser())
		.use(
			session({
				name: redisConf.sessionName!,
				secret: redisConf.secret!,
				store: new RedisStore({
					client: redisClient,
					disableTouch: true,
				}),
				cookie: {
					maxAge: 1000 * 60 * 60 * 24 * 90, // 90 days
					httpOnly: true,
					secure: apiConf.__prod__,
					sameSite: 'lax',
				},
				saveUninitialized: false,
				resave: false,
			}),
		)
		.use(router);

	apolloServer.applyMiddleware({ app });

	http.createServer(app).listen(port, () => {
		console.log(`\nServer listening on http://localhost:${port}`);
		console.log(`Graphql listening on http://localhost:${port}/graphql`);
		console.log(`Database listening on db://localhost:${dbConf.port}\n`);
	});
};

export { app };
