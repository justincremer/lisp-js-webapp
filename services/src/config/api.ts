const conf = {
	port: process.env.API_PORT,
	__prod__: process.env.NODE_ENV === 'production',
	__dev__: process.env.NODE_ENV === 'development',
};

export { conf as apiConf };
