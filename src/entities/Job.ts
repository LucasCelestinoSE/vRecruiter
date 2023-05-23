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
    @Column('simple-json', {nullable: true})
    perguntas: {
      pergunta1: {
        questao: string
        alternativas:{
          alternativaA:string
          alternativaB:string
          alternativaC:string
          alternativaD:string
        }
      }
      pergunta2: {
        questao: string
        alternativas:{
          alternativaA:string
          alternativaB:string
          alternativaC:string
          alternativaD:string
        }
      }
      pergunta3: {
        questao: string
        alternativas:{
          alternativaA:string
          alternativaB:string
          alternativaC:string
          alternativaD:string
        }
      }
      pergunta4: {
        questao: string
        alternativas:{
          alternativaA:string
          alternativaB:string
          alternativaC:string
          alternativaD:string
        }
      }
      pergunta5: {
        questao: string
        alternativas:{
          alternativaA:string
          alternativaB:string
          alternativaC:string
          alternativaD:string
        }
      }
      pergunta6: {
        questao: string
        alternativas:{
          alternativaA:string
          alternativaB:string
          alternativaC:string
          alternativaD:string
        }
      }
      pergunta7: {
        questao: string
        alternativas:{
          alternativaA:string
          alternativaB:string
          alternativaC:string
          alternativaD:string
        }
      }
      pergunta8: {
        questao: string
        alternativas:{
          alternativaA:string
          alternativaB:string
          alternativaC:string
          alternativaD:string
        }
      }
      pergunta9: {
        questao: string
        alternativas:{
          alternativaA:string
          alternativaB:string
          alternativaC:string
          alternativaD:string
        }
      }
      pergunta10: {
        questao: string
        alternativas:{
          alternativaA:string
          alternativaB:string
          alternativaC:string
          alternativaD:string
        }
      }
    };
    @Column()
    gabarito: string
  }