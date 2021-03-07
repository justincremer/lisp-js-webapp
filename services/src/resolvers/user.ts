import { Arg, Int, Mutation, Query } from 'type-graphql';
import { User } from '../entities';

class UserResolver {
	@Query(() => [User])
	async listUsers(): Promise<Array<User>> {
		try {
			const result = User.find();

			return result ?? null;
		} catch (e) {
			throw new Error(e);
		}
	}

	@Query(() => User, { nullable: true })
	async getUser(@Arg('id', () => Int) id: number): Promise<User | null> {
		try {
			const result = await User.findOne(id);

			return result ?? null;
		} catch (e) {
			throw new Error(e);
		}
	}

	@Mutation(() => User)
	async createUser(
		@Arg('firstName', () => String)
		firstName: string,
		@Arg('lastName', () => String)
		lastName: string,
		@Arg('userName', () => String)
		userName: string,
		@Arg('email', () => String)
		email: string,
		@Arg('phone', () => String, { nullable: true })
		phone: string,
		@Arg('countryCode', () => String, { nullable: true })
		countryCode: string,
	): Promise<User> {
		try {
			const user = {
				firstName,
				lastName,
				userName,
				email,
				phone,
				countryCode,
			};

			const result = await User.create(user);

			await User.save(result);

			return result;
		} catch (e) {
			throw new Error(e);
		}
	}

	@Mutation(() => User)
	async updateUser(
		@Arg('id', () => Int)
		id: number,
		@Arg('firstName', () => String, { nullable: true })
		firstName: string,
		@Arg('lastName', () => String, { nullable: true })
		lastName: string,
		@Arg('userName', () => String, { nullable: true })
		userName: string,
		@Arg('email', () => String, { nullable: true })
		email: string,
		@Arg('phone', () => String, { nullable: true })
		phone: string,
		@Arg('countryCode', () => String, { nullable: true })
		countryCode: string,
	): Promise<User> {
		try {
			const user = await this.getUser(id);

			const userData = {
				firstName,
				lastName,
				userName,
				email,
				phone,
				countryCode,
			};

			Object.assign(user, userData);

			await user?.save();

			return user!;
		} catch (e) {
			throw new Error(e);
		}
	}

	@Mutation(() => User)
	async upsertUser(
		@Arg('id', () => Int)
		id: number,
		@Arg('firstName', () => String, { nullable: true })
		firstName: string,
		@Arg('lastName', () => String, { nullable: true })
		lastName: string,
		@Arg('userName', () => String, { nullable: true })
		userName: string,
		@Arg('email', () => String, { nullable: true })
		email: string,
		@Arg('phone', () => String, { nullable: true })
		phone: string,
		@Arg('countryCode', () => String, { nullable: true })
		countryCode: string,
	): Promise<User> {
		try {
			const user = await this.getUser(id);

			if (user) {
				const userData = {
					firstName,
					lastName,
					userName,
					email,
					phone,
					countryCode,
				};

				Object.assign(user, userData);

				await user?.save();

				return user!;
			} else {
				const result = await this.createUser(
					firstName,
					lastName,
					userName,
					email,
					phone,
					countryCode,
				);

				return result;
			}
		} catch (e) {
			throw new Error(e);
		}
	}

	@Mutation(() => Boolean)
	async deleteUser(
		@Arg('id', () => Int)
		id: number,
	): Promise<Boolean> {
		try {
			try {
				await User.delete(id);
				return true;
			} catch {
				return false;
			}
		} catch (e) {
			throw new Error(e);
		}
	}
}

export default UserResolver;
