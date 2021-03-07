import { Field, Int, ObjectType } from 'type-graphql';
import {
	BaseEntity,
	Column,
	CreateDateColumn,
	Entity,
	PrimaryGeneratedColumn,
	UpdateDateColumn,
} from 'typeorm';

@ObjectType()
@Entity()
class Post extends BaseEntity {
	@Field(() => Int)
	@PrimaryGeneratedColumn()
	id: number;

	@Field(() => Date)
	@CreateDateColumn()
	createdAt!: Date;

	@Field(() => Date)
	@UpdateDateColumn()
	updatedAt!: Date;

	@Field(() => String)
	@Column({ type: 'varchar', length: '256' })
	content: string;
}

export default Post;
