import { Entity, PrimaryGeneratedColumn, Column, ManyToMany, JoinTable, ManyToOne, OneToOne, OneToMany } from 'typeorm';
import { Job } from './Job';
@Entity('companys')
export class Company {
  @PrimaryGeneratedColumn()
  id: number;

  @Column({ type: 'text' })
  name: string;
  @OneToMany(() => Job, job => job.company)
  jobs: Job[]
}