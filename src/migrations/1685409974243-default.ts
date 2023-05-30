import { MigrationInterface, QueryRunner } from "typeorm";

export class Default1685409974243 implements MigrationInterface {
    name = 'Default1685409974243'

    public async up(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`ALTER TABLE \`jobs\` ADD \`alternativas\` varchar(255) NOT NULL`);
    }

    public async down(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`ALTER TABLE \`jobs\` DROP COLUMN \`alternativas\``);
    }

}
