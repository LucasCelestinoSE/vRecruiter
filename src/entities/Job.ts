import { OneToMany,Entity, PrimaryGeneratedColumn, Column, ManyToMany, JoinTable, ManyToOne, JoinColumn } from 'typeorm';
import { User } from './User';
import { Company } from './Company';
import { UserJob } from './UserJob';
@Entity('jobs')
export class Job {
    @PrimaryGeneratedColumn()
    id: number;
  
    @Column()
    title: string;
  
    @Column()
    description: string;

    @ManyToOne(() => Company, company => company.jobs)
    @JoinColumn({name: 'company_id'})
    company: Company
    @Column({ type: 'int', default: 0})
    stage: number
   
  }