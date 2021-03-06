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
	createdAt = new Date();

	@UpdateDateColumn()
	updatedAt = new Date();

	@Column('text', { nullable: true })
	title!: string;
}

export default SourceFile;
