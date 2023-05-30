import { MigrationInterface, QueryRunner } from "typeorm";

export class Default1685459085348 implements MigrationInterface {
    name = 'Default1685459085348'

    public async up(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`DROP INDEX \`IDX_b1bda35cdb9a2c1b777f5541d8\` ON \`users\``);
        await queryRunner.query(`ALTER TABLE \`jobs\` DROP COLUMN \`alternativas\``);
        await queryRunner.query(`ALTER TABLE \`jobs\` DROP COLUMN \`perguntas\``);
        await queryRunner.query(`ALTER TABLE \`jobs\` ADD \`perguntas\` text NOT NULL`);
    }

    public async down(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`ALTER TABLE \`jobs\` DROP COLUMN \`perguntas\``);
        await queryRunner.query(`ALTER TABLE \`jobs\` ADD \`perguntas\` varchar(255) NOT NULL`);
        await queryRunner.query(`ALTER TABLE \`jobs\` ADD \`alternativas\` longtext NOT NULL`);
        await queryRunner.query(`CREATE UNIQUE INDEX \`IDX_b1bda35cdb9a2c1b777f5541d8\` ON \`users\` (\`profileId\`)`);
    }

}
