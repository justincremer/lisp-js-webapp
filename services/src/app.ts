import 'reflect-metadata';
import express from 'express';
import { ApolloServer } from 'apollo-server-express';
import { buildSchemaSync } from 'type-graphql';

import logger from 'morgan';
import cookieParser from 'cookie-parser';

import indexRouter from './routes/index';
import userRouter from './routes/users';
import dbRouter from './routes/db';

import orm from './orm';
import { testResolver } from './resolvers';

orm();

const app = express();

// Add top level async wrapper to use 'await buildSchema'
let apolloServer = new ApolloServer({
	schema: buildSchemaSync({
		resolvers: [testResolver],
		validate: false,
	}),
});

app.use(logger('dev'));
app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(cookieParser());

app.use('/', indexRouter);
app.use('/users', userRouter);
app.use('/pg', dbRouter);

apolloServer.applyMiddleware({ app });

export default app;
