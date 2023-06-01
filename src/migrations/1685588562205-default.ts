import { MigrationInterface, QueryRunner } from "typeorm";

export class Default1685588562205 implements MigrationInterface {
    name = 'Default1685588562205'

    public async up(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`ALTER TABLE "companys" ADD "description" jsonb NOT NULL`);
        await queryRunner.query(`ALTER TABLE "profiles" DROP COLUMN "cidade"`);
        await queryRunner.query(`ALTER TABLE "profiles" ADD "cidade" character varying NOT NULL`);
    }

    public async down(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`ALTER TABLE "profiles" DROP COLUMN "cidade"`);
        await queryRunner.query(`ALTER TABLE "profiles" ADD "cidade" text`);
        await queryRunner.query(`ALTER TABLE "companys" DROP COLUMN "description"`);
    }

}
