import { createConnection } from 'typeorm';
import { dbConf } from '.';
import { User, Post } from '../entities';
import path from 'path';
import { root } from '../utils';

const conf = {
	type: 'postgres',
	...dbConf,
	entities: [User, Post],
	migrationsTableName: 'source_file_migration_table',
	migrations: ['.ts', '.js'].map((e) =>
		path.resolve(root, 'sevices', `migrations/*${e}`),
	),
	logging: true,
	synchronize: true,
} as Parameters<typeof createConnection>[0];

export { conf as ormConf };
