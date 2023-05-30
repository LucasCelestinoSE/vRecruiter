import { MigrationInterface, QueryRunner } from "typeorm";

export class Default1685460001164 implements MigrationInterface {
    name = 'Default1685460001164'

    public async up(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`ALTER TABLE \`users\` ADD \`password\` varchar(255) NOT NULL`);
    }

    public async down(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`ALTER TABLE \`users\` DROP COLUMN \`password\``);
    }

}
