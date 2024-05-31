import 'dotenv/config';
import { Redis } from 'ioredis';

export const redis = new Redis({
	port: parseInt(process.env.REDIS_PORT!),
	host: process.env.REDIS_HOST,
	username: process.env.REDIS_USERNAME,
	password: process.env.REDIS_PASSWORD
});
