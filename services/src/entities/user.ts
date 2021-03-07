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
	@Column({ type: 'varchar', length: '64' })
	firstName: string;

	@Field(() => String)
	@Column({ type: 'varchar', length: '64' })
	lastName: string;

	@Field(() => String)
	@Column({ type: 'varchar', length: '32', unique: true })
	userName: string;

	@Field(() => String)
	@Column({ type: 'varchar', length: '64', unique: true })
	email: string;

	@Field(() => String)
	@Column({ type: 'varchar', length: '15', unique: true, nullable: true })
	phone: string;

	@Field(() => String)
	@Column({ type: 'varchar', length: '5', nullable: true })
	countryCode: string;
}

export default User;
