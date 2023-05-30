import { MigrationInterface, QueryRunner } from "typeorm";

export class Default1685470621244 implements MigrationInterface {
    name = 'Default1685470621244'

    public async up(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`CREATE TABLE "jobs" ("id" SERIAL NOT NULL, "title" character varying NOT NULL, "description" character varying NOT NULL, "dados" jsonb NOT NULL, "gabarito" character varying NOT NULL, "companyId" integer, CONSTRAINT "PK_cf0a6c42b72fcc7f7c237def345" PRIMARY KEY ("id"))`);
        await queryRunner.query(`CREATE TABLE "companys" ("id" SERIAL NOT NULL, "name" text NOT NULL, "token" character varying, CONSTRAINT "PK_a4f1caae0b4e0af6fe3315cec31" PRIMARY KEY ("id"))`);
        await queryRunner.query(`CREATE TABLE "contatos" ("id" SERIAL NOT NULL, "name" character varying NOT NULL, "email" character varying NOT NULL, "telefone" character varying NOT NULL, "empresa_nome" character varying NOT NULL, "cargo" character varying NOT NULL, "funcionarios" integer NOT NULL, "array" character varying NOT NULL, CONSTRAINT "PK_994cdcb2c56dfb5b66217c854cc" PRIMARY KEY ("id"))`);
        await queryRunner.query(`CREATE TABLE "phases" ("id" SERIAL NOT NULL, "name" character varying NOT NULL, CONSTRAINT "PK_e93bb53460b28d4daf72735d5d3" PRIMARY KEY ("id"))`);
        await queryRunner.query(`CREATE TABLE "users" ("id" SERIAL NOT NULL, "name" text NOT NULL, "password" character varying NOT NULL, "email" character varying(255) NOT NULL, "profileId" integer, CONSTRAINT "UQ_97672ac88f789774dd47f7c8be3" UNIQUE ("email"), CONSTRAINT "REL_b1bda35cdb9a2c1b777f5541d8" UNIQUE ("profileId"), CONSTRAINT "PK_a3ffb1c0c8416b9fc6f907b7433" PRIMARY KEY ("id"))`);
        await queryRunner.query(`CREATE TABLE "profiles" ("id" SERIAL NOT NULL, "experiencia" text NOT NULL, "formacoes" text NOT NULL, "idiomas" text NOT NULL, "habilidades" text NOT NULL, "preferencia" text NOT NULL, CONSTRAINT "PK_8e520eb4da7dc01d0e190447c8e" PRIMARY KEY ("id"))`);
        await queryRunner.query(`CREATE TABLE "userjobs" ("id" SERIAL NOT NULL, "userId" integer NOT NULL, "jobId" integer NOT NULL, "companyId" integer NOT NULL, "stage" integer NOT NULL, "isOpen" boolean NOT NULL DEFAULT true, "iframe" character varying, "right_answers" integer, CONSTRAINT "PK_cc91aac0389b5b0fc51a15b09a4" PRIMARY KEY ("id"))`);
        await queryRunner.query(`ALTER TABLE "jobs" ADD CONSTRAINT "FK_6ce4483dc65ed9d2e171269d801" FOREIGN KEY ("companyId") REFERENCES "companys"("id") ON DELETE NO ACTION ON UPDATE NO ACTION`);
        await queryRunner.query(`ALTER TABLE "users" ADD CONSTRAINT "FK_b1bda35cdb9a2c1b777f5541d87" FOREIGN KEY ("profileId") REFERENCES "profiles"("id") ON DELETE NO ACTION ON UPDATE NO ACTION`);
    }

    public async down(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`ALTER TABLE "users" DROP CONSTRAINT "FK_b1bda35cdb9a2c1b777f5541d87"`);
        await queryRunner.query(`ALTER TABLE "jobs" DROP CONSTRAINT "FK_6ce4483dc65ed9d2e171269d801"`);
        await queryRunner.query(`DROP TABLE "userjobs"`);
        await queryRunner.query(`DROP TABLE "profiles"`);
        await queryRunner.query(`DROP TABLE "users"`);
        await queryRunner.query(`DROP TABLE "phases"`);
        await queryRunner.query(`DROP TABLE "contatos"`);
        await queryRunner.query(`DROP TABLE "companys"`);
        await queryRunner.query(`DROP TABLE "jobs"`);
    }

}
