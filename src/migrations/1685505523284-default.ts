import { MigrationInterface, QueryRunner } from "typeorm";

export class Default1685505523284 implements MigrationInterface {
    name = 'Default1685505523284'

    public async up(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`ALTER TABLE "profiles" ALTER COLUMN "idade" DROP NOT NULL`);
        await queryRunner.query(`ALTER TABLE "profiles" ALTER COLUMN "cidade" SET NOT NULL`);
        await queryRunner.query(`ALTER TABLE "profiles" ALTER COLUMN "redesSociais" DROP NOT NULL`);
        await queryRunner.query(`ALTER TABLE "profiles" ALTER COLUMN "experiencias" DROP NOT NULL`);
        await queryRunner.query(`ALTER TABLE "profiles" DROP COLUMN "deficiencia"`);
        await queryRunner.query(`ALTER TABLE "profiles" ADD "deficiencia" jsonb`);
    }

    public async down(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`ALTER TABLE "profiles" DROP COLUMN "deficiencia"`);
        await queryRunner.query(`ALTER TABLE "profiles" ADD "deficiencia" boolean`);
        await queryRunner.query(`ALTER TABLE "profiles" ALTER COLUMN "experiencias" SET NOT NULL`);
        await queryRunner.query(`ALTER TABLE "profiles" ALTER COLUMN "redesSociais" SET NOT NULL`);
        await queryRunner.query(`ALTER TABLE "profiles" ALTER COLUMN "cidade" DROP NOT NULL`);
        await queryRunner.query(`ALTER TABLE "profiles" ALTER COLUMN "idade" SET NOT NULL`);
    }

}
