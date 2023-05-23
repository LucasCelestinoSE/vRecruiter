import { MigrationInterface, QueryRunner } from "typeorm";

export class Default1684421071462 implements MigrationInterface {
    name = 'Default1684421071462'

    public async up(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`ALTER TABLE \`userjobs\` ADD \`otherInfo\` text NULL`);
    }

    public async down(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`ALTER TABLE \`userjobs\` DROP COLUMN \`otherInfo\``);
    }

}
