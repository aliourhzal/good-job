import { Entity, PrimaryGeneratedColumn, Column, CreateDateColumn, ManyToOne} from "typeorm";
import type { Relation } from "typeorm";
import { User } from "./User";

@Entity()
export class Job {
	@PrimaryGeneratedColumn({type: 'bigint'})
	id!: number;

	@Column({nullable: false, type: 'varchar'})
	title!: string;

	@Column({nullable: false, type: 'varchar'})
	description!: string;

	@Column({nullable: false, type: 'varchar'})
	city!: string;

	@Column({nullable: false, type: 'varchar'})
	category!: string;

    @ManyToOne(() => User, (user) => user.jobs)
    user!: Relation<User>;

	@CreateDateColumn({ type: 'timestamp' })
	created_at!: Date;

}