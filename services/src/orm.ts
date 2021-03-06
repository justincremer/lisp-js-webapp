// import 'reflect-metadata';
import { createConnection } from 'typeorm';
// import { SourceFile } from './entities';
import { typeormConf } from './config';

export default async (): Promise<void> => {
	try {
		const connection = await createConnection(typeormConf);

		connection.close();
	} catch (e) {
		console.log(e);
	}
};
