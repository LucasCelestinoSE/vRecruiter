import { MigrationInterface, QueryRunner } from "typeorm";

export class Default1685504588347 implements MigrationInterface {
    name = 'Default1685504588347'

    public async up(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`ALTER TABLE "profiles" DROP CONSTRAINT "FK_315ecd98bd1a42dcf2ec4e2e985"`);
        await queryRunner.query(`ALTER TABLE "profiles" RENAME COLUMN "userId" TO "cidade"`);
        await queryRunner.query(`ALTER TABLE "profiles" RENAME CONSTRAINT "UQ_315ecd98bd1a42dcf2ec4e2e985" TO "UQ_82c193e774a7b9603227b170aea"`);
        await queryRunner.query(`ALTER TABLE "profiles" DROP CONSTRAINT "UQ_82c193e774a7b9603227b170aea"`);
        await queryRunner.query(`ALTER TABLE "profiles" DROP COLUMN "cidade"`);
        await queryRunner.query(`ALTER TABLE "profiles" ADD "cidade" character varying NOT NULL`);
    }

    public async down(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`ALTER TABLE "profiles" DROP COLUMN "cidade"`);
        await queryRunner.query(`ALTER TABLE "profiles" ADD "cidade" integer`);
        await queryRunner.query(`ALTER TABLE "profiles" ADD CONSTRAINT "UQ_82c193e774a7b9603227b170aea" UNIQUE ("cidade")`);
        await queryRunner.query(`ALTER TABLE "profiles" RENAME CONSTRAINT "UQ_82c193e774a7b9603227b170aea" TO "UQ_315ecd98bd1a42dcf2ec4e2e985"`);
        await queryRunner.query(`ALTER TABLE "profiles" RENAME COLUMN "cidade" TO "userId"`);
        await queryRunner.query(`ALTER TABLE "profiles" ADD CONSTRAINT "FK_315ecd98bd1a42dcf2ec4e2e985" FOREIGN KEY ("userId") REFERENCES "users"("id") ON DELETE NO ACTION ON UPDATE NO ACTION`);
    }

}
