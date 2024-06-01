import 'dotenv/config';
import { createClient } from 'redis';

// export const redis = new Redis({
// 	host: 'redis-15004.c1.us-west-2-2.ec2.cloud.redislabs.com',
// 	port: 15004,
// 	username: 'default',
// 	password: 'j47w3IlDXoMVd15x4vNnIlQVnSkSAV8X'
// });

export const ensureOpen = async () => {
	if (!(await redis.isOpen)) {
		await redis.connect();
	}
	return redis;
};

console.log(
	`redis://${process.env.REDIS_USERNAME}:${process.env.REDIS_PASSWORD}@${process.env.REDIS_URL}:${process.env.REDIS_PORT}`
);

export const redis = await createClient({
	url: `redis://${process.env.REDIS_USERNAME}:${process.env.REDIS_PASSWORD}@${process.env.REDIS_URL}:${process.env.REDIS_PORT}`
});

ensureOpen();
