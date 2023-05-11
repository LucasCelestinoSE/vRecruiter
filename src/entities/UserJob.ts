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
  userId: number; // Adicione a coluna jobId com o tipo number

  @Column()
  jobId: number; // Adicione a coluna jobId com o tipo number

  @Column()
  stage: number; // Adicione a coluna jobId com o tipo number
  @Column({ default: true})
  isOpen: boolean
  @Column({ type: 'json', nullable: true })
  phase_1Data: JSON;
  @Column({ type: 'json', nullable: true })
  phase_2Data: JSON;
  @Column({ type: 'json', nullable: true })
  phase_3Data: JSON;
  @Column({ type: 'json', nullable: true })
  phase_4Data: JSON;
}
