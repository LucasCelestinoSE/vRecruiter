import { Entity, PrimaryGeneratedColumn, Column, ManyToMany, JoinTable, ManyToOne, JoinColumn } from 'typeorm';
import { User } from './User';
import { Company } from './Company';
@Entity('jobs')
export class Job {
    @PrimaryGeneratedColumn()
    id: number;
  
    @Column()
    title: string;
  
    @Column()
    description: string;
  
    @ManyToMany(() => User, user => user.jobs)
    @JoinTable({
      name: 'user_job',
      joinColumn:{
        name: 'job_id',
        referencedColumnName: 'id'
      },
      inverseJoinColumn:{
        name: 'user_id',
        referencedColumnName: 'id'
      }
    })
    users: User[]
    @ManyToOne(() => Company, company => company.jobs)
    @JoinColumn({name: 'company_id'})
    company: Company
  }