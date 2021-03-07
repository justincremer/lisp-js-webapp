import 'reflect-metadata';
import express from 'express';
import { ApolloServer } from 'apollo-server-express';

import http from 'http';
import logger from 'morgan';
import cookieParser from 'cookie-parser';

import { createConnection } from 'typeorm';
import { buildSchema } from 'type-graphql';
import { UserResolver } from './resolvers';
import { apiConf, dbConf, typeormConf } from './config';

import { baseRouter, dbRouter, userRouter } from './routes';

export default async (): Promise<void> => {
	const connection = await createConnection(typeormConf);
	const em = connection.manager;

	connection.runMigrations();

	const app = express();

	const port = apiConf.port ?? '8000';
	app.set('port', port);

	const apolloServer = new ApolloServer({
		schema: await buildSchema({
			resolvers: [UserResolver],
			validate: false,
		}),
		context: () => ({ em: em }),
	});

	app.use(logger('dev'));
	app.use(express.json());
	app.use(express.urlencoded({ extended: true }));
	app.use(cookieParser());

	app.use('/', baseRouter);
	app.use('/db', dbRouter);
	app.use('/users', userRouter);

	apolloServer.applyMiddleware({ app });

	http.createServer(app).listen(port, () => {
		console.log(`\nServer listening on http://localhost:${port}`);
		console.log(`Graphql listening on http://localhost:${port}/graphql`);
		console.log(`Database listening on db://localhost:${dbConf.port}\n`);
	});
};
