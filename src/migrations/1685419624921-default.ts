import { MigrationInterface, QueryRunner } from "typeorm";

export class Default1685419624921 implements MigrationInterface {
    name = 'Default1685419624921'

    public async up(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`CREATE TABLE \`jobs\` (\`id\` int NOT NULL AUTO_INCREMENT, \`title\` varchar(255) NOT NULL, \`description\` varchar(255) NOT NULL, \`perguntas\` varchar(255) NOT NULL, \`alternativas\` longtext NOT NULL, \`gabarito\` varchar(255) NOT NULL, \`companyId\` int NULL, PRIMARY KEY (\`id\`)) ENGINE=InnoDB`);
        await queryRunner.query(`ALTER TABLE \`jobs\` ADD CONSTRAINT \`FK_6ce4483dc65ed9d2e171269d801\` FOREIGN KEY (\`companyId\`) REFERENCES \`companys\`(\`id\`) ON DELETE NO ACTION ON UPDATE NO ACTION`);
    }

    public async down(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`ALTER TABLE \`jobs\` DROP FOREIGN KEY \`FK_6ce4483dc65ed9d2e171269d801\``);
        await queryRunner.query(`DROP TABLE \`jobs\``);
    }

}
