import { MigrationInterface, QueryRunner } from "typeorm";

export class Default1683769799791 implements MigrationInterface {
    name = 'Default1683769799791'

    public async up(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`DROP INDEX \`FK_6411633bf4c8d627af7d5313af3\` ON \`userjobs\``);
        await queryRunner.query(`ALTER TABLE \`userjobs\` DROP COLUMN \`aberta\``);
        await queryRunner.query(`ALTER TABLE \`userjobs\` ADD \`isOpen\` tinyint NOT NULL DEFAULT 1`);
        await queryRunner.query(`ALTER TABLE \`userjobs\` ADD \`jsonData\` json NULL`);
    }

    public async down(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`ALTER TABLE \`userjobs\` DROP COLUMN \`jsonData\``);
        await queryRunner.query(`ALTER TABLE \`userjobs\` DROP COLUMN \`isOpen\``);
        await queryRunner.query(`ALTER TABLE \`userjobs\` ADD \`aberta\` tinyint NOT NULL DEFAULT '1'`);
        await queryRunner.query(`CREATE INDEX \`FK_6411633bf4c8d627af7d5313af3\` ON \`userjobs\` (\`userId\`)`);
    }

}
