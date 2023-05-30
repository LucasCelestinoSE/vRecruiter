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
import { User } from './User'

@Entity('profiles')
export class Profile {
    @PrimaryGeneratedColumn()
    id: number
	@Column({type:'simple-array'})
	experiencia: string[]
	@Column({type: 'simple-array'})
	formacoes: string[]
    @Column({type:'simple-array'})
    idiomas: string[]
    @Column({type: 'simple-array'})
    habilidades: string[]
    @Column({type: 'simple-array'})
    preferencia: string[]
    @OneToOne(() => User, user => user.profile)
    user: User;
    
}
