import { MigrationInterface, QueryRunner } from "typeorm";

export class Default1685505253073 implements MigrationInterface {
    name = 'Default1685505253073'

    public async up(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`ALTER TABLE "profiles" ADD "redesSociais" jsonb NOT NULL`);
        await queryRunner.query(`ALTER TABLE "profiles" ALTER COLUMN "cidade" DROP NOT NULL`);
    }

    public async down(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`ALTER TABLE "profiles" ALTER COLUMN "cidade" SET NOT NULL`);
        await queryRunner.query(`ALTER TABLE "profiles" DROP COLUMN "redesSociais"`);
    }

}
