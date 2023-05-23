import { Entity, PrimaryGeneratedColumn, Column, ManyToMany, JoinTable, ManyToOne, OneToOne, OneToMany } from 'typeorm';
import { Job } from './Job';
@Entity('companys')
export class Company {
  @PrimaryGeneratedColumn()
  id: number;

  @Column({ type: 'text' })
  name: string;
  @Column({nullable: true})
  token: string
  // Defina o relacionamento "1 para muitos" com a entidade Job
  @OneToMany(() => Job, job => job.company)
  jobs: Job[];
}