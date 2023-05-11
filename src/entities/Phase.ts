import {
	Column,
	Entity,
	OneToOne,
	PrimaryGeneratedColumn,
	JoinColumn,
	OneToMany,
	ManyToMany,
    ManyToOne
} from 'typeorm'
import {UserJob} from './UserJob'
@Entity('phases')
export class Phase {
  @PrimaryGeneratedColumn()
  id: number;

  @Column()
  name: string;

  
}