import { MigrationInterface, QueryRunner } from "typeorm";

export class Default1682811888406 implements MigrationInterface {
    name = 'Default1682811888406'

    public async up(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`CREATE TABLE \`users\` (\`id\` int NOT NULL AUTO_INCREMENT, \`name\` text NOT NULL, \`email\` varchar(255) NOT NULL, \`password\` text NOT NULL, UNIQUE INDEX \`IDX_97672ac88f789774dd47f7c8be\` (\`email\`), PRIMARY KEY (\`id\`)) ENGINE=InnoDB`);
        await queryRunner.query(`CREATE TABLE \`jobs\` (\`id\` int NOT NULL AUTO_INCREMENT, \`title\` varchar(255) NOT NULL, \`description\` varchar(255) NOT NULL, \`company_id\` int NULL, PRIMARY KEY (\`id\`)) ENGINE=InnoDB`);
        await queryRunner.query(`CREATE TABLE \`companys\` (\`id\` int NOT NULL AUTO_INCREMENT, \`name\` text NOT NULL, PRIMARY KEY (\`id\`)) ENGINE=InnoDB`);
        await queryRunner.query(`CREATE TABLE \`user_job\` (\`job_id\` int NOT NULL, \`user_id\` int NOT NULL, INDEX \`IDX_591db62b2d11487afa3db54e47\` (\`job_id\`), INDEX \`IDX_94dc643d3b7d4636c7e95cb426\` (\`user_id\`), PRIMARY KEY (\`job_id\`, \`user_id\`)) ENGINE=InnoDB`);
        await queryRunner.query(`ALTER TABLE \`jobs\` ADD CONSTRAINT \`FK_087a773c50525e348e26188e7cc\` FOREIGN KEY (\`company_id\`) REFERENCES \`companys\`(\`id\`) ON DELETE NO ACTION ON UPDATE NO ACTION`);
        await queryRunner.query(`ALTER TABLE \`user_job\` ADD CONSTRAINT \`FK_591db62b2d11487afa3db54e47f\` FOREIGN KEY (\`job_id\`) REFERENCES \`jobs\`(\`id\`) ON DELETE CASCADE ON UPDATE CASCADE`);
        await queryRunner.query(`ALTER TABLE \`user_job\` ADD CONSTRAINT \`FK_94dc643d3b7d4636c7e95cb426c\` FOREIGN KEY (\`user_id\`) REFERENCES \`users\`(\`id\`) ON DELETE NO ACTION ON UPDATE NO ACTION`);
    }

    public async down(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`ALTER TABLE \`user_job\` DROP FOREIGN KEY \`FK_94dc643d3b7d4636c7e95cb426c\``);
        await queryRunner.query(`ALTER TABLE \`user_job\` DROP FOREIGN KEY \`FK_591db62b2d11487afa3db54e47f\``);
        await queryRunner.query(`ALTER TABLE \`jobs\` DROP FOREIGN KEY \`FK_087a773c50525e348e26188e7cc\``);
        await queryRunner.query(`DROP INDEX \`IDX_94dc643d3b7d4636c7e95cb426\` ON \`user_job\``);
        await queryRunner.query(`DROP INDEX \`IDX_591db62b2d11487afa3db54e47\` ON \`user_job\``);
        await queryRunner.query(`DROP TABLE \`user_job\``);
        await queryRunner.query(`DROP TABLE \`companys\``);
        await queryRunner.query(`DROP TABLE \`jobs\``);
        await queryRunner.query(`DROP INDEX \`IDX_97672ac88f789774dd47f7c8be\` ON \`users\``);
        await queryRunner.query(`DROP TABLE \`users\``);
    }

}
