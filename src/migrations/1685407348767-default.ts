import { MigrationInterface, QueryRunner } from "typeorm";

export class Default1685407348767 implements MigrationInterface {
    name = 'Default1685407348767'

    public async up(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`ALTER TABLE \`jobs\` ADD \`perguntas\` text NULL`);
        await queryRunner.query(`ALTER TABLE \`jobs\` ADD \`gabarito\` varchar(255) NOT NULL`);
    }

    public async down(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`ALTER TABLE \`jobs\` DROP COLUMN \`gabarito\``);
        await queryRunner.query(`ALTER TABLE \`jobs\` DROP COLUMN \`perguntas\``);
    }

}
