import { MigrationInterface, QueryRunner } from "typeorm";

export class Default1685604295455 implements MigrationInterface {
    name = 'Default1685604295455'

    public async up(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`ALTER TABLE "companys" DROP COLUMN "valores"`);
        await queryRunner.query(`ALTER TABLE "companys" ADD "valores" text array NOT NULL`);
    }

    public async down(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`ALTER TABLE "companys" DROP COLUMN "valores"`);
        await queryRunner.query(`ALTER TABLE "companys" ADD "valores" character varying NOT NULL`);
    }

}
