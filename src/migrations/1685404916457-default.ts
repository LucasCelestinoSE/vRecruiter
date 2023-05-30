import { MigrationInterface, QueryRunner } from "typeorm";

export class Default1685404916457 implements MigrationInterface {
    name = 'Default1685404916457'

    public async up(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`CREATE TABLE \`answers\` (\`id\` int NOT NULL AUTO_INCREMENT, \`title\` varchar(255) NOT NULL, \`description\` varchar(255) NOT NULL, \`jobId\` int NULL, PRIMARY KEY (\`id\`)) ENGINE=InnoDB`);
        await queryRunner.query(`ALTER TABLE \`jobs\` DROP COLUMN \`perguntas\``);
        await queryRunner.query(`ALTER TABLE \`jobs\` DROP COLUMN \`gabarito\``);
        await queryRunner.query(`ALTER TABLE \`answers\` ADD CONSTRAINT \`FK_9839e826af4cbf9f6c55e6f223d\` FOREIGN KEY (\`jobId\`) REFERENCES \`jobs\`(\`id\`) ON DELETE NO ACTION ON UPDATE NO ACTION`);
    }

    public async down(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`ALTER TABLE \`answers\` DROP FOREIGN KEY \`FK_9839e826af4cbf9f6c55e6f223d\``);
        await queryRunner.query(`ALTER TABLE \`jobs\` ADD \`gabarito\` varchar(255) NOT NULL`);
        await queryRunner.query(`ALTER TABLE \`jobs\` ADD \`perguntas\` text NULL`);
        await queryRunner.query(`DROP TABLE \`answers\``);
    }

}
