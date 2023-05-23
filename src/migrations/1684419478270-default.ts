import { MigrationInterface, QueryRunner } from "typeorm";

export class Default1684419478270 implements MigrationInterface {
    name = 'Default1684419478270'

    public async up(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`CREATE TABLE \`DataUsers\` (\`id\` int NOT NULL AUTO_INCREMENT, \`name\` text NOT NULL, \`genero\` varchar(255) NOT NULL, \`area\` text NOT NULL, \`experiencia\` varchar(255) NOT NULL, \`userjobId\` int NULL, UNIQUE INDEX \`REL_e87be42d19c0217b0b0de19ce8\` (\`userjobId\`), PRIMARY KEY (\`id\`)) ENGINE=InnoDB`);
        await queryRunner.query(`ALTER TABLE \`userjobs\` DROP COLUMN \`phase_1Data\``);
        await queryRunner.query(`ALTER TABLE \`userjobs\` DROP COLUMN \`phase_2Data\``);
        await queryRunner.query(`ALTER TABLE \`userjobs\` DROP COLUMN \`phase_3Data\``);
        await queryRunner.query(`ALTER TABLE \`userjobs\` DROP COLUMN \`phase_4Data\``);
        await queryRunner.query(`ALTER TABLE \`userjobs\` ADD \`iframe\` varchar(255) NOT NULL`);
        await queryRunner.query(`ALTER TABLE \`DataUsers\` ADD CONSTRAINT \`FK_e87be42d19c0217b0b0de19ce8b\` FOREIGN KEY (\`userjobId\`) REFERENCES \`userjobs\`(\`id\`) ON DELETE NO ACTION ON UPDATE NO ACTION`);
    }

    public async down(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`ALTER TABLE \`DataUsers\` DROP FOREIGN KEY \`FK_e87be42d19c0217b0b0de19ce8b\``);
        await queryRunner.query(`ALTER TABLE \`userjobs\` DROP COLUMN \`iframe\``);
        await queryRunner.query(`ALTER TABLE \`userjobs\` ADD \`phase_4Data\` json NULL`);
        await queryRunner.query(`ALTER TABLE \`userjobs\` ADD \`phase_3Data\` json NULL`);
        await queryRunner.query(`ALTER TABLE \`userjobs\` ADD \`phase_2Data\` json NULL`);
        await queryRunner.query(`ALTER TABLE \`userjobs\` ADD \`phase_1Data\` json NULL`);
        await queryRunner.query(`DROP INDEX \`REL_e87be42d19c0217b0b0de19ce8\` ON \`DataUsers\``);
        await queryRunner.query(`DROP TABLE \`DataUsers\``);
    }

}