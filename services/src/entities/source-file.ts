import {
	BaseEntity,
	Column,
	CreateDateColumn,
	Entity,
	PrimaryGeneratedColumn,
	UpdateDateColumn,
} from 'typeorm';

@Entity()
class SourceFile extends BaseEntity {
	@PrimaryGeneratedColumn()
	id!: string;

	@CreateDateColumn()
	createdAt!: Date;

	@UpdateDateColumn()
	updatedAt!: Date;

	@Column('text', { nullable: true })
	title!: string;
}

export { SourceFile };
