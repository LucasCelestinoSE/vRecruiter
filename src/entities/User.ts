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
import { Profile } from './Profile'

@Entity('users')
export class User {
	@PrimaryGeneratedColumn()
	id: number

	@Column({ type: 'text' })
	name: string
	@Column()
	password:string
	@Column({ type: 'varchar', unique: true, length:255})
	email: string
	@OneToOne(() => Profile, profile => profile.user, { cascade: true })
 	@JoinColumn()
 	profile: Profile;
}
