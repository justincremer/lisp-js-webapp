import { Ctx, Query } from 'type-graphql';
import { User } from '../entities';
import { Context } from '../types';

export class UserResolver {
	@Query(() => [User])
	users(@Ctx() { em }: Context): Promise<Array<User>> {
		return em.find(User, {});
	}
}
