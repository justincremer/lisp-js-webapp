const isEmail = (input: string) =>
	/^[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$/.test(
		input
	)
		? true
		: false;

export { isEmail };
