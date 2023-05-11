import { MigrationInterface, QueryRunner } from "typeorm";

export class Default1683761747602 implements MigrationInterface {
    name = 'Default1683761747602'

    public async up(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`ALTER TABLE \`userjobs\` DROP FOREIGN KEY \`FK_6411633bf4c8d627af7d5313af3\``);
        await queryRunner.query(`DROP INDEX \`FK_9bdeb5668ff6ac20970a1249e1f\` ON \`userjobs\``);
        await queryRunner.query(`ALTER TABLE \`userjobs\` CHANGE \`userId\` \`userId\` int NOT NULL`);
    }

    public async down(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`ALTER TABLE \`userjobs\` CHANGE \`userId\` \`userId\` int NULL`);
        await queryRunner.query(`CREATE INDEX \`FK_9bdeb5668ff6ac20970a1249e1f\` ON \`userjobs\` (\`jobId\`)`);
        await queryRunner.query(`ALTER TABLE \`userjobs\` ADD CONSTRAINT \`FK_6411633bf4c8d627af7d5313af3\` FOREIGN KEY (\`userId\`) REFERENCES \`users\`(\`id\`) ON DELETE NO ACTION ON UPDATE NO ACTION`);
    }

}
