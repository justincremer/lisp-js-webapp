export default {
	port: process.env.API_PORT,
	__prod: process.env.NODE_ENV === 'production',
	__dev: process.env.NODE_ENV === 'development',
};
