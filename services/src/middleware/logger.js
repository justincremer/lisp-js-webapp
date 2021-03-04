const middleware = (req, res, next) => {
	const start = Date.now();

	next();

	const finish = Date.now();
	const reqTime = (finish - start) / 1000;

	console.log(`${req.method} ${req.url} ${res.statusCode} => ${reqTime}s`);
};

module.exports = middleware;
