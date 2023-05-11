import { MigrationInterface, QueryRunner } from "typeorm";

export class Default1683761292724 implements MigrationInterface {
    name = 'Default1683761292724'

    public async up(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`ALTER TABLE \`userjobs\` DROP FOREIGN KEY \`FK_366f58f151756c872de1b759c9e\``);
        await queryRunner.query(`ALTER TABLE \`userjobs\` DROP FOREIGN KEY \`FK_9bdeb5668ff6ac20970a1249e1f\``);
        await queryRunner.query(`ALTER TABLE \`userjobs\` DROP COLUMN \`phaseId\``);
        await queryRunner.query(`ALTER TABLE \`userjobs\` ADD \`stage\` int NOT NULL`);
        await queryRunner.query(`ALTER TABLE \`userjobs\` ADD \`aberta\` tinyint NOT NULL DEFAULT 1`);
        await queryRunner.query(`ALTER TABLE \`userjobs\` CHANGE \`jobId\` \`jobId\` int NOT NULL`);
    }

    public async down(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`ALTER TABLE \`userjobs\` CHANGE \`jobId\` \`jobId\` int NULL`);
        await queryRunner.query(`ALTER TABLE \`userjobs\` DROP COLUMN \`aberta\``);
        await queryRunner.query(`ALTER TABLE \`userjobs\` DROP COLUMN \`stage\``);
        await queryRunner.query(`ALTER TABLE \`userjobs\` ADD \`phaseId\` int NULL`);
        await queryRunner.query(`ALTER TABLE \`userjobs\` ADD CONSTRAINT \`FK_9bdeb5668ff6ac20970a1249e1f\` FOREIGN KEY (\`jobId\`) REFERENCES \`jobs\`(\`id\`) ON DELETE NO ACTION ON UPDATE NO ACTION`);
        await queryRunner.query(`ALTER TABLE \`userjobs\` ADD CONSTRAINT \`FK_366f58f151756c872de1b759c9e\` FOREIGN KEY (\`phaseId\`) REFERENCES \`phases\`(\`id\`) ON DELETE NO ACTION ON UPDATE NO ACTION`);
    }

}
