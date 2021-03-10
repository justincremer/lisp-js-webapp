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
class User extends BaseEntity {
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
	@Column({ type: 'varchar', length: '32', unique: true })
	username: string;

	@Field(() => String)
	@Column({ type: 'varchar', length: '64', unique: true })
	email: string;

	@Column({ type: 'varchar', length: '128' })
	password: string;

	@Field(() => String, { nullable: true })
	@Column({ type: 'varchar', length: '64', nullable: true })
	firstname: string;

	@Field(() => String, { nullable: true })
	@Column({ type: 'varchar', length: '64', nullable: true })
	lastname: string;

	@Field(() => String, { nullable: true })
	@Column({ type: 'varchar', length: '16', unique: true, nullable: true })
	phone: string;

	@Field(() => String, { nullable: true })
	@Column({ type: 'varchar', length: '8', nullable: true })
	countryCode: string;
}

export { User };
