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
    // Defina a relação inversa com a entidade Company
    @ManyToOne(() => Company, company => company.jobs)
    company: Company;
    @Column({ type: 'jsonb' })
    dados: { perguntas: string[], alternativas: string[] }[];
    @Column()
    gabarito: string
  }