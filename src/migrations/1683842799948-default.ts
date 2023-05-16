import { MigrationInterface, QueryRunner } from "typeorm";

export class Default1683842799948 implements MigrationInterface {
    name = 'Default1683842799948'

    public async up(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`ALTER TABLE \`jobs\` DROP COLUMN \`stage\``);
    }

    public async down(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`ALTER TABLE \`jobs\` ADD \`stage\` int NOT NULL DEFAULT '0'`);
    }

}
