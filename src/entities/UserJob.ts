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
import { User } from './User';
import { Job } from './Job';
import { Phase } from './Phase';
@Entity('userjobs')
export class UserJob {
  @PrimaryGeneratedColumn()
  id: number;

  @Column()
  userId: number; 

  @Column()
  jobId: number; 
  @Column()
  companyId: number
  @Column()
  stage: number; 
  @Column({ default: true})
  isOpen: boolean
  @Column({nullable: true})
  iframe:string
  @Column({nullable: true})
  right_answers: number
}
