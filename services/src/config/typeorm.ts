import { createConnection } from 'typeorm';
import { dbConf } from '.';
import { SourceFile } from '../entities';
import path from 'path';
import { root } from '../utils';

export default {
	type: 'postgres',

	...dbConf,
	entities: [SourceFile],
	migrationsTableName: 'source_file_migration_table',
	migrations: ['.ts', '.js'].map((e) =>
		path.resolve(root, 'sevices', `migrations/*${e}`),
	),
	logging: true,
	synchronize: true,
} as Parameters<typeof createConnection>[0];
