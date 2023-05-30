import { MigrationInterface, QueryRunner } from "typeorm";

export class Default1685409887445 implements MigrationInterface {
    name = 'Default1685409887445'

    public async up(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`ALTER TABLE \`jobs\` DROP COLUMN \`perguntas\``);
        await queryRunner.query(`ALTER TABLE \`jobs\` ADD \`perguntas\` varchar(255) NOT NULL`);
    }

    public async down(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`ALTER TABLE \`jobs\` DROP COLUMN \`perguntas\``);
        await queryRunner.query(`ALTER TABLE \`jobs\` ADD \`perguntas\` text NULL`);
    }

}
