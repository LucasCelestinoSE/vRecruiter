import { MigrationInterface, QueryRunner } from "typeorm";

export class Default1683754138307 implements MigrationInterface {
    name = 'Default1683754138307'

    public async up(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`CREATE TABLE \`userjobs\` (\`id\` int NOT NULL AUTO_INCREMENT, \`userId\` int NULL, \`jobId\` int NULL, \`phaseId\` int NULL, PRIMARY KEY (\`id\`)) ENGINE=InnoDB`);
        await queryRunner.query(`CREATE TABLE \`phases\` (\`id\` int NOT NULL AUTO_INCREMENT, \`name\` varchar(255) NOT NULL, PRIMARY KEY (\`id\`)) ENGINE=InnoDB`);
        await queryRunner.query(`ALTER TABLE \`jobs\` DROP COLUMN \`etapa\``);
        await queryRunner.query(`ALTER TABLE \`userjobs\` ADD CONSTRAINT \`FK_6411633bf4c8d627af7d5313af3\` FOREIGN KEY (\`userId\`) REFERENCES \`users\`(\`id\`) ON DELETE NO ACTION ON UPDATE NO ACTION`);
        await queryRunner.query(`ALTER TABLE \`userjobs\` ADD CONSTRAINT \`FK_9bdeb5668ff6ac20970a1249e1f\` FOREIGN KEY (\`jobId\`) REFERENCES \`jobs\`(\`id\`) ON DELETE NO ACTION ON UPDATE NO ACTION`);
        await queryRunner.query(`ALTER TABLE \`userjobs\` ADD CONSTRAINT \`FK_366f58f151756c872de1b759c9e\` FOREIGN KEY (\`phaseId\`) REFERENCES \`phases\`(\`id\`) ON DELETE NO ACTION ON UPDATE NO ACTION`);
    }

    public async down(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`ALTER TABLE \`userjobs\` DROP FOREIGN KEY \`FK_366f58f151756c872de1b759c9e\``);
        await queryRunner.query(`ALTER TABLE \`userjobs\` DROP FOREIGN KEY \`FK_9bdeb5668ff6ac20970a1249e1f\``);
        await queryRunner.query(`ALTER TABLE \`userjobs\` DROP FOREIGN KEY \`FK_6411633bf4c8d627af7d5313af3\``);
        await queryRunner.query(`ALTER TABLE \`jobs\` ADD \`etapa\` int NOT NULL`);
        await queryRunner.query(`DROP TABLE \`phases\``);
        await queryRunner.query(`DROP TABLE \`userjobs\``);
    }

}
