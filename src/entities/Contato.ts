import {
	Column,
	Entity,
	OneToOne,
	PrimaryGeneratedColumn,
	JoinColumn,
	OneToMany,
	ManyToMany,
    ManyToOne,
} from 'typeorm'
@Entity('contatos')
export class Contato {
  @PrimaryGeneratedColumn()
  id: number;
  @Column()
  name: string;
  @Column()
  email: string;
  @Column()
  telefone:string
  @Column()
  empresa_nome:string
  @Column()
  cargo:string
  @Column()
  funcionarios: number
  @Column()
  array:string
}