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
	@Column({ type: 'text' , nullable:true})
    idade: string;
	@Column()
	telefone:string
	@Column()
	cep: string
	@Column()
	estado:string
	@Column({nullable:true})
	cidade: string
	@Column({type: 'jsonb', nullable:true})
	redesSociais: { 
		instagram: string,
		facebook: string,
		twitter: string}
	@Column({type: 'jsonb', nullable:true})
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
    @Column({type: 'jsonb',nullable:true})
    deficiencia: {nome:string[]}[]
    @OneToOne(() => User, user => user.profile)
	user: User;
    
}
