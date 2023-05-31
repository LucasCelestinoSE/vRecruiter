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
	@Column({ type: 'text' })
    genero: string;
	@Column({ type: 'text' })
    idade: string;
	@Column()
	telefone:string
	@Column()
	cep: string
	@Column()
	estado:string
	@Column({type: 'jsonb'})
	experiencias: { 
		experiencia: string[], 
		empresa: string[],
		cidade:string[],
		descricao: string[],
		inicio:string,
		fim:string }[];
	@Column({type: 'jsonb', nullable:true})
	formacoes: {formacao: string[],
				instituicao:string,
				local:string,
				inicio:string,
				fim:string}[]
    @Column({type:'jsonb',nullable:true})
    idiomas:{idioma:string, nivel:string}[];
    @Column({type: 'jsonb',nullable:true})
    habilidades: {habilidade: string[]}[]
    @Column({type: 'boolean',nullable:true})
    deficiencia: boolean
    @OneToOne(() => User, user => user.profile)
	user: User;
    
}
