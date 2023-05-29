import { MigrationInterface, QueryRunner } from "typeorm";

export class Default1685403590684 implements MigrationInterface {
    name = 'Default1685403590684'

    public async up(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`ALTER TABLE \`userjobs\` ADD \`right_answers\` int NOT NULL`);
    }

    public async down(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`ALTER TABLE \`userjobs\` DROP COLUMN \`right_answers\``);
    }

}
