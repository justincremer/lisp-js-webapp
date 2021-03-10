const conf = {
	sessionName: process.env.REDIS_SESSION_NAME,
	secret: process.env.REDIS_SECRET,
	port: process.env.REDIS_PORT,
};

export { conf as redisConf };
