import { MigrationInterface, QueryRunner } from "typeorm";

export class Default1685405636197 implements MigrationInterface {
    name = 'Default1685405636197'

    public async up(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`ALTER TABLE \`answers\` ADD \`alternativas\` varchar(255) NOT NULL`);
    }

    public async down(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`ALTER TABLE \`answers\` DROP COLUMN \`alternativas\``);
    }

}
