import { Query } from 'type-graphql';

export class testResolver {
	@Query(() => String)
	test() {
		return 'hello world';
	}
}
