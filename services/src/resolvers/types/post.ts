import { Field, InputType } from 'type-graphql';

@InputType()
class PostInput {
	@Field(() => String)
	content: string;
}

export { PostInput };
