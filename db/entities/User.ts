import { Entity, PrimaryGeneratedColumn, Column, CreateDateColumn, OneToMany, Relation} from "typeorm";
import { Job } from "./Job";

@Entity()
export class User {
	@PrimaryGeneratedColumn({type: 'bigint'})
	id!: number;

	@Column({unique: true, nullable: false, type: 'varchar'})
	email!: string;

	@Column({nullable: false, type: 'varchar'})
	firstname!: string;

	@Column({nullable: false, type: 'varchar'})
	lastname!: string;

	@Column({nullable: false, type: 'varchar'})
	password!: string;

	@OneToMany(() => Job, (job) => job.user, { cascade: true })
    jobs!: Relation<Job>[];

	@CreateDateColumn({ type: 'timestamp' })
	created_at!: Date;

	constructor(email: string, password: string, firstname: string, lastname: string) {
		this.email = email;
		this.firstname = firstname;
		this.lastname = lastname;
		this.password = password;
	}
}