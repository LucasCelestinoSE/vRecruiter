import { MigrationInterface, QueryRunner } from "typeorm";

export class Default1685208772331 implements MigrationInterface {
    name = 'Default1685208772331'

    public async up(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`CREATE TABLE \`companys\` (\`id\` int NOT NULL AUTO_INCREMENT, \`name\` text NOT NULL, \`token\` varchar(255) NULL, PRIMARY KEY (\`id\`)) ENGINE=InnoDB`);
        await queryRunner.query(`CREATE TABLE \`jobs\` (\`id\` int NOT NULL AUTO_INCREMENT, \`title\` varchar(255) NOT NULL, \`description\` varchar(255) NOT NULL, \`perguntas\` text NULL, \`gabarito\` varchar(255) NOT NULL, \`companyId\` int NULL, PRIMARY KEY (\`id\`)) ENGINE=InnoDB`);
        await queryRunner.query(`CREATE TABLE \`userjobs\` (\`id\` int NOT NULL AUTO_INCREMENT, \`userId\` int NOT NULL, \`jobId\` int NOT NULL, \`companyId\` int NOT NULL, \`stage\` int NOT NULL, \`isOpen\` tinyint NOT NULL DEFAULT 1, \`iframe\` varchar(255) NULL, \`otherInfo\` text NULL, PRIMARY KEY (\`id\`)) ENGINE=InnoDB`);
        await queryRunner.query(`CREATE TABLE \`users\` (\`id\` int NOT NULL AUTO_INCREMENT, \`name\` text NOT NULL, \`email\` varchar(255) NOT NULL, \`password\` text NOT NULL, UNIQUE INDEX \`IDX_97672ac88f789774dd47f7c8be\` (\`email\`), PRIMARY KEY (\`id\`)) ENGINE=InnoDB`);
        await queryRunner.query(`CREATE TABLE \`phases\` (\`id\` int NOT NULL AUTO_INCREMENT, \`name\` varchar(255) NOT NULL, PRIMARY KEY (\`id\`)) ENGINE=InnoDB`);
        await queryRunner.query(`ALTER TABLE \`jobs\` ADD CONSTRAINT \`FK_6ce4483dc65ed9d2e171269d801\` FOREIGN KEY (\`companyId\`) REFERENCES \`companys\`(\`id\`) ON DELETE NO ACTION ON UPDATE NO ACTION`);
    }

    public async down(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`ALTER TABLE \`jobs\` DROP FOREIGN KEY \`FK_6ce4483dc65ed9d2e171269d801\``);
        await queryRunner.query(`DROP TABLE \`phases\``);
        await queryRunner.query(`DROP INDEX \`IDX_97672ac88f789774dd47f7c8be\` ON \`users\``);
        await queryRunner.query(`DROP TABLE \`users\``);
        await queryRunner.query(`DROP TABLE \`userjobs\``);
        await queryRunner.query(`DROP TABLE \`jobs\``);
        await queryRunner.query(`DROP TABLE \`companys\``);
    }

}
