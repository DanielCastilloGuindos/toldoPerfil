
import { createClient } from '@libsql/client';
import { drizzle } from 'drizzle-orm/libsql';
import * as schema from './schema';
import * as dotenv from 'dotenv';

dotenv.config();

const url = process.env.TURSO_CONNECTION_URL || 'file:local.db';
const authToken = process.env.TURSO_AUTH_TOKEN;

const client = createClient({
    url,
    authToken,
});

export const db = drizzle(client, { schema });
