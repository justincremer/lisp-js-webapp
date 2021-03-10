import { Field, InputType, ObjectType } from 'type-graphql';
import { User } from '../../entities';

@InputType()
class UserInput {
	@Field(() => String, { nullable: true })
	username?: string;
	@Field(() => String, { nullable: true })
	email?: string;
	@Field(() => String, { nullable: true })
	firstname?: string;
	@Field(() => String, { nullable: true })
	lastname?: string;
	@Field(() => String, { nullable: true })
	phone?: string;
	@Field(() => String, { nullable: true })
	countryCode?: string;
}

@InputType()
class UserLoginInput {
	@Field(() => String, { nullable: true })
	username?: string;
	@Field(() => String, { nullable: true })
	email?: string;
	@Field(() => String)
	password: string;
}

@ObjectType()
class FieldError {
	@Field(() => String)
	field: string;
	@Field(() => String)
	message: string;
}

@ObjectType()
class UserResponse {
	@Field(() => String, { nullable: true })
	status?: string;
	@Field(() => User, { nullable: true })
	user?: User;
	@Field(() => [FieldError], { nullable: true })
	errors?: Array<FieldError> = [];
}

export { UserInput, UserLoginInput, UserResponse };
