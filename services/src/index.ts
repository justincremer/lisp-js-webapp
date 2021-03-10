import dotenv from 'dotenv';
import path from 'path';
import { root } from './utils';

dotenv.config({ path: path.join(root, '.env') });

import { app } from './app';

app();
