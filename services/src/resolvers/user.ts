import { Arg, Ctx, Int, Mutation, Query } from 'type-graphql';

import { User } from '../entities';
import { hashPass, verifyPass } from '../utils';
import {
	UserInput,
	UserLoginInput,
	UserResponse,
	UserListResponse,
} from './types';
import { Context } from '../types';

export class UserResolver {
	@Query(() => UserListResponse)
	async listUsers(): Promise<UserListResponse> {
		try {
			let response: UserListResponse = new UserListResponse();

			response.status = 'Success';
			const userList = await User.find();
			userList.forEach((u) => response.userList.push(u));

			return response;
		} catch (e) {
			throw new Error(e);
		}
	}

	@Query(() => UserResponse)
	async getUserById(
		@Arg('id', () => Int) id: number,
		@Ctx() {},
	): Promise<UserResponse> {
		try {
			let response = new UserResponse();
			const user = await User.findOne(id);

			if (user) {
				response.status = 'success';
				response.user = user;
			} else {
				response.status = 'Failure';
				response.errors!.push({
					field: 'user',
					message: 'User not found',
				});
			}

			return response;
		} catch (e) {
			throw new Error(e);
		}
	}

	@Query(() => UserResponse)
	async getUserByUsernameOrEmail(
		@Arg('input', () => UserInput) input: UserInput,
	): Promise<UserResponse> {
		try {
			const { email, username } = input;
			let response = new UserResponse();

			if (!email && !username) {
				response.status = 'Failure';
				response.errors!.push({
					field: 'email/username',
					message: 'Email and username cannot both be null',
				});
			} else {
				let user;

				if (email) {
					user = await User.findOne({ email: email });
				} else {
					user = await User.findOne({ username: username });
				}

				if (user) {
					response.status = 'Success';
					response.user = user;
				} else {
					response.status = 'Not found';
					response.errors!.push({
						field: 'user',
						message: 'User not found',
					});
				}
			}

			return response;
		} catch (e) {
			throw new Error(e);
		}
	}

	@Mutation(() => UserResponse)
	async registerUser(
		@Arg('input', () => UserLoginInput) input: UserLoginInput,
		@Ctx() { req, res }: Context,
	): Promise<UserResponse> {
		try {
			const { email, username, password } = input;
			let response: UserResponse = new UserResponse();

			if (password.length < 8) {
				response.status = 'Failure';
				response.errors!.push({
					field: 'password',
					message: 'Password must be at least 8 characters',
				});

				// TODO: add field validation
			} else if (username!.length <= 3 || email!.length <= 3) {
				response.status = 'Failure';
				response.errors!.push({
					field: 'email/username',
					message: 'Invalid email or username',
				});
			} else {
				const result: UserResponse = await this.getUserByUsernameOrEmail(
					{
						username: username,
						email: email,
					},
				);

				if (result.user) {
					response.status = 'Failure';
					response.errors!.push({
						field: 'user',
						message: 'User already exists',
					});
				} else {
					const hashedPass = await hashPass(password);
					await Object.assign(input, { password: hashedPass });

					const user = User.create(input);
					await User.save(user);

					response.status = 'Success';
					response.user = user;
				}
			}

			return response;
		} catch (e) {
			throw new Error(e);
		}
	}

	@Mutation(() => UserResponse)
	async authenticateUser(
		@Arg('input', () => UserLoginInput) input: UserLoginInput,
		@Ctx() { req }: Context,
	): Promise<UserResponse> {
		try {
			let response: UserResponse = new UserResponse();
			const { email, username, password } = input;
			const params = {
				email: email,
				username: username,
			};

			const result = await this.getUserByUsernameOrEmail(params);
			const user = result.user;

			if (user) {
				const hashedPass = user.password;
				const valid = await verifyPass(hashedPass, password);

				if (valid) {
					req.session.userId = user.id;

					response.status = 'Success';
					response.user = result.user;
				} else {
					response.status = 'Failure';
					response.errors!.push({
						field: 'password',
						message: 'invalid password',
					});
				}
			} else {
				response.status = 'Failure';
				response.errors!.push({
					field: 'username/email',
					message: 'User not found',
				});
			}

			return response;
		} catch (e) {
			throw new Error(e);
		}
	}

	@Mutation(() => UserResponse)
	async updateUser(
		@Arg('id', () => Int) id: number,
		@Arg('input', () => UserInput) input: UserInput,
	): Promise<UserResponse> {
		try {
			let response: UserResponse = new UserResponse();
			const result: UserResponse = await this.getUserById(id, {});
			const { user }: UserResponse = result;

			if (user) {
				Object.assign(user, input);
				await user.save();

				response.status = 'Success';
				response.user = user;
			} else {
				response = result;
			}

			return response;
		} catch (e) {
			throw new Error(e);
		}
	}

	@Mutation(() => UserResponse)
	async deleteUserById(
		@Arg('id', () => Int) id: number,
	): Promise<UserResponse> {
		try {
			let response: UserResponse = new UserResponse();

			const { affected } = await User.delete(id);

			if (affected) {
				response.status = 'Success';
			} else {
				response.status = 'Failure';
				response.errors!.push({
					field: 'user',
					message: 'User not found',
				});
			}

			return response;
		} catch (e) {
			throw new Error(e);
		}
	}

	@Mutation(() => UserListResponse)
	async deleteAllUsers(): Promise<UserResponse> {
		// Deletes everyone except scoob!
		try {
			let response: UserListResponse = new UserListResponse();
			const { userList } = await this.listUsers();
			let deletedUsers: Array<User> = new Array<User>();

			userList.forEach(async (u) => {
				if (u.email !== 'scoobert@xiubox.io') {
					const deleted = await this.deleteUserById(u.id);
					const { user, status } = deleted;
					if (status === 'Success') {
						deletedUsers.push(user!);
					}
				}
			});

			response.status = 'Success';
			response.userList = deletedUsers;

			return response;
		} catch (e) {
			throw new Error(e);
		}
	}

	// @Mutation(() => User)
	// async upsertUser(
	// 	@Arg('id', () => Int)
	// 	id: number,
	// 	@Arg('dto', () => UserInput)
	// 	input: UserInput,
	// 	@Arg('password', () => String, { nullable: true })
	// 	password: string,
	// ): Promise<User | null> {
	// 	try {
	// 		const inputList = Object.values(input);
	// 		const user = await this.getUserById(id);

	// 		if (user) {
	// 			Object.assign(
	// 				user,
	// 				inputList.map((i) => i !== null),
	// 			);

	// 			await user?.save();

	// 			return user!;
	// 		} else {
	// 			let user = dto as CreateUserDto;
	// 			Object.assign(user, hashPass(password));

	// 			const result = await this.createUser(user);

	// 			return result;
	// 		}
	// 	} catch (e) {
	// 		throw new Error(e);
	// 	}
	// }

	@Query(() => UserResponse, { nullable: true })
	async getCurrentUser(@Ctx() { req }: Context) {
		let response: UserResponse = new UserResponse();
		let { userId } = req.session;

		if (!userId) {
			response.status = 'Failure';
			response.errors!.push({
				field: 'user',
				message: 'Not logged in',
			});
		} else {
			response = await this.getUserById(userId, req);
		}

		return response;
	}
}
