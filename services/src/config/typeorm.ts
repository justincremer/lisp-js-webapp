import { createConnection } from 'typeorm';
import { dbConf } from '.';
import { User, SourceFile } from '../entities';
import path from 'path';
import { root } from '../utils';

export default {
	type: 'postgres',
	...dbConf,
	entities: [User, SourceFile],
	migrationsTableName: 'source_file_migration_table',
	migrations: ['.ts', '.js'].map((e) =>
		path.resolve(root, 'sevices', `migrations/*.{js, ts}`),
	),
	logging: true,
	synchronize: true,
} as Parameters<typeof createConnection>[0];
