import { MigrationInterface, QueryRunner } from "typeorm";

export class Default1685455899034 implements MigrationInterface {
    name = 'Default1685455899034'

    public async up(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`CREATE TABLE \`profiles\` (\`id\` int NOT NULL AUTO_INCREMENT, \`experiencia\` text NOT NULL, \`formacoes\` text NOT NULL, \`idiomas\` text NOT NULL, \`habilidades\` text NOT NULL, \`preferencia\` text NOT NULL, PRIMARY KEY (\`id\`)) ENGINE=InnoDB`);
        await queryRunner.query(`ALTER TABLE \`users\` ADD \`formacao\` text NOT NULL`);
    }

    public async down(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`ALTER TABLE \`users\` DROP COLUMN \`formacao\``);
        await queryRunner.query(`DROP TABLE \`profiles\``);
    }

}
