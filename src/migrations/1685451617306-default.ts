import { MigrationInterface, QueryRunner } from "typeorm";

export class Default1685451617306 implements MigrationInterface {
    name = 'Default1685451617306'

    public async up(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`ALTER TABLE \`userjobs\` DROP COLUMN \`otherInfo\``);
        await queryRunner.query(`ALTER TABLE \`users\` ADD \`experiencia\` text NOT NULL`);
    }

    public async down(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`ALTER TABLE \`users\` DROP COLUMN \`experiencia\``);
        await queryRunner.query(`ALTER TABLE \`userjobs\` ADD \`otherInfo\` text NULL`);
    }

}
