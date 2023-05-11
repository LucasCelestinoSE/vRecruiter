import { MigrationInterface, QueryRunner } from "typeorm";

export class Default1683769895071 implements MigrationInterface {
    name = 'Default1683769895071'

    public async up(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`ALTER TABLE \`userjobs\` DROP COLUMN \`jsonData\``);
        await queryRunner.query(`ALTER TABLE \`userjobs\` ADD \`phase_1Data\` json NULL`);
        await queryRunner.query(`ALTER TABLE \`userjobs\` ADD \`phase_2Data\` json NULL`);
        await queryRunner.query(`ALTER TABLE \`userjobs\` ADD \`phase_3Data\` json NULL`);
        await queryRunner.query(`ALTER TABLE \`userjobs\` ADD \`phase_4Data\` json NULL`);
    }

    public async down(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`ALTER TABLE \`userjobs\` DROP COLUMN \`phase_4Data\``);
        await queryRunner.query(`ALTER TABLE \`userjobs\` DROP COLUMN \`phase_3Data\``);
        await queryRunner.query(`ALTER TABLE \`userjobs\` DROP COLUMN \`phase_2Data\``);
        await queryRunner.query(`ALTER TABLE \`userjobs\` DROP COLUMN \`phase_1Data\``);
        await queryRunner.query(`ALTER TABLE \`userjobs\` ADD \`jsonData\` json NULL`);
    }

}
