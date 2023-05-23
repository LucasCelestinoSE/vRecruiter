import { MigrationInterface, QueryRunner } from "typeorm";

export class Default1684359635383 implements MigrationInterface {
    name = 'Default1684359635383'

    public async up(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`CREATE TABLE \`phases\` (\`id\` int NOT NULL AUTO_INCREMENT, \`name\` varchar(255) NOT NULL, PRIMARY KEY (\`id\`)) ENGINE=InnoDB`);
        await queryRunner.query(`CREATE TABLE \`companys\` (\`id\` int NOT NULL AUTO_INCREMENT, \`name\` text NOT NULL, PRIMARY KEY (\`id\`)) ENGINE=InnoDB`);
        await queryRunner.query(`CREATE TABLE \`users\` (\`id\` int NOT NULL AUTO_INCREMENT, \`name\` text NOT NULL, \`email\` varchar(255) NOT NULL, \`password\` text NOT NULL, UNIQUE INDEX \`IDX_97672ac88f789774dd47f7c8be\` (\`email\`), PRIMARY KEY (\`id\`)) ENGINE=InnoDB`);
        await queryRunner.query(`CREATE TABLE \`jobs\` (\`id\` int NOT NULL AUTO_INCREMENT, \`title\` varchar(255) NOT NULL, \`description\` varchar(255) NOT NULL, \`company\` int NOT NULL, PRIMARY KEY (\`id\`)) ENGINE=InnoDB`);
        await queryRunner.query(`CREATE TABLE \`userjobs\` (\`id\` int NOT NULL AUTO_INCREMENT, \`userId\` int NOT NULL, \`jobId\` int NOT NULL, \`companyId\` int NOT NULL, \`stage\` int NOT NULL, \`isOpen\` tinyint NOT NULL DEFAULT 1, \`phase_1Data\` json NULL, \`phase_2Data\` json NULL, \`phase_3Data\` json NULL, \`phase_4Data\` json NULL, PRIMARY KEY (\`id\`)) ENGINE=InnoDB`);
    }

    public async down(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`DROP TABLE \`userjobs\``);
        await queryRunner.query(`DROP TABLE \`jobs\``);
        await queryRunner.query(`DROP INDEX \`IDX_97672ac88f789774dd47f7c8be\` ON \`users\``);
        await queryRunner.query(`DROP TABLE \`users\``);
        await queryRunner.query(`DROP TABLE \`companys\``);
        await queryRunner.query(`DROP TABLE \`phases\``);
    }

}
