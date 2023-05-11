import {
	Column,
	Entity,
	OneToOne,
	PrimaryGeneratedColumn,
	JoinColumn,
	OneToMany,
	ManyToMany
} from 'typeorm'
import { Job } from './Job'
import { UserJob } from './UserJob'

@Entity('users')
export class User {
	@PrimaryGeneratedColumn()
	id: number

	@Column({ type: 'text' })
	name: string

	@Column({ type: 'varchar', unique: true, length:255})
	email: string

	@Column({ type: 'text'})
	password: string
	
}
