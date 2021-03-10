import argon2 from 'argon2';

const hashPass = async (pass: string): Promise<string> =>
	await argon2.hash(pass);

const verifyPass = async (hash: string, pass: string): Promise<boolean> =>
	await argon2.verify(hash, pass);

export { hashPass, verifyPass };
