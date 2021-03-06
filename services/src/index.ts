import dotenv from 'dotenv';
import path from 'path';
import { root } from './utils';

dotenv.config({ path: path.join(root, '.env') });

import http from 'http';
import app from './app';
import { apiConf } from './config';

const port = apiConf.port ?? '8000';
app.set('port', port);

const server = http.createServer(app);

server.listen(port);

console.log(`Listening on http://localhost:${port}`);
