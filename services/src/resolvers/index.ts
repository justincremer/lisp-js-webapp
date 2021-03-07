import { Query } from 'type-graphql';

import { UserResolver } from './user';

export class HelloResolver {
	@Query(() => String)
	hello() {
		return 'hello world';
	}
}

export { UserResolver };
