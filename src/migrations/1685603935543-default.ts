import { MigrationInterface, QueryRunner } from "typeorm";

export class Default1685603935543 implements MigrationInterface {
    name = 'Default1685603935543'

    public async up(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`ALTER TABLE "jobs" ADD "dataContrato" jsonb NOT NULL`);
        await queryRunner.query(`ALTER TABLE "companys" ADD "apresentacao" character varying NOT NULL`);
        await queryRunner.query(`ALTER TABLE "companys" ADD "visao" character varying NOT NULL`);
        await queryRunner.query(`ALTER TABLE "companys" ADD "missao" character varying NOT NULL`);
        await queryRunner.query(`ALTER TABLE "companys" ADD "valores" character varying NOT NULL`);
        await queryRunner.query(`ALTER TABLE "profiles" DROP COLUMN "cidade"`);
        await queryRunner.query(`ALTER TABLE "profiles" ADD "cidade" character varying`);
    }

    public async down(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`ALTER TABLE "profiles" DROP COLUMN "cidade"`);
        await queryRunner.query(`ALTER TABLE "profiles" ADD "cidade" text NOT NULL`);
        await queryRunner.query(`ALTER TABLE "companys" DROP COLUMN "valores"`);
        await queryRunner.query(`ALTER TABLE "companys" DROP COLUMN "missao"`);
        await queryRunner.query(`ALTER TABLE "companys" DROP COLUMN "visao"`);
        await queryRunner.query(`ALTER TABLE "companys" DROP COLUMN "apresentacao"`);
        await queryRunner.query(`ALTER TABLE "jobs" DROP COLUMN "dataContrato"`);
    }

}
