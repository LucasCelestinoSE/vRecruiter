import { OneToMany,Entity, PrimaryGeneratedColumn, Column, ManyToMany, JoinTable, ManyToOne, JoinColumn } from 'typeorm';
import { User } from './User';
import { Job } from './Job';
import { UserJob } from './UserJob';
@Entity('answers')
export class Answer {
    @PrimaryGeneratedColumn()
    id: number;
  
    @Column()
    title: string;
  
    @Column()
    description: string;
    // Defina a relação inversa com a entidade Company
    @ManyToOne(() => Job, job => job.answers)
    job: Job;
  }