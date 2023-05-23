import { MigrationInterface, QueryRunner } from "typeorm";

export class Default1684360311790 implements MigrationInterface {
    name = 'Default1684360311790'

    public async up(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`ALTER TABLE \`jobs\` ADD \`pergunta1\` varchar(255) NOT NULL`);
        await queryRunner.query(`ALTER TABLE \`jobs\` ADD \`alternativa1\` varchar(255) NOT NULL`);
        await queryRunner.query(`ALTER TABLE \`jobs\` ADD \`pergunta2\` varchar(255) NOT NULL`);
        await queryRunner.query(`ALTER TABLE \`jobs\` ADD \`alternativa2\` varchar(255) NOT NULL`);
        await queryRunner.query(`ALTER TABLE \`jobs\` ADD \`pergunta3\` varchar(255) NOT NULL`);
        await queryRunner.query(`ALTER TABLE \`jobs\` ADD \`alternativa3\` varchar(255) NOT NULL`);
        await queryRunner.query(`ALTER TABLE \`jobs\` ADD \`pergunta4\` varchar(255) NOT NULL`);
        await queryRunner.query(`ALTER TABLE \`jobs\` ADD \`alternativa4\` varchar(255) NOT NULL`);
        await queryRunner.query(`ALTER TABLE \`jobs\` ADD \`pergunta5\` varchar(255) NOT NULL`);
        await queryRunner.query(`ALTER TABLE \`jobs\` ADD \`alternativa5\` varchar(255) NOT NULL`);
        await queryRunner.query(`ALTER TABLE \`jobs\` ADD \`pergunta6\` varchar(255) NOT NULL`);
        await queryRunner.query(`ALTER TABLE \`jobs\` ADD \`alternativa6\` varchar(255) NOT NULL`);
        await queryRunner.query(`ALTER TABLE \`jobs\` ADD \`pergunta7\` varchar(255) NOT NULL`);
        await queryRunner.query(`ALTER TABLE \`jobs\` ADD \`alternativa7\` varchar(255) NOT NULL`);
        await queryRunner.query(`ALTER TABLE \`jobs\` ADD \`pergunta8\` varchar(255) NOT NULL`);
        await queryRunner.query(`ALTER TABLE \`jobs\` ADD \`alternativa8\` varchar(255) NOT NULL`);
        await queryRunner.query(`ALTER TABLE \`jobs\` ADD \`pergunta9\` varchar(255) NOT NULL`);
        await queryRunner.query(`ALTER TABLE \`jobs\` ADD \`alternativa9\` varchar(255) NOT NULL`);
        await queryRunner.query(`ALTER TABLE \`jobs\` ADD \`pergunta10\` varchar(255) NOT NULL`);
        await queryRunner.query(`ALTER TABLE \`jobs\` ADD \`alternativa10\` varchar(255) NOT NULL`);
        await queryRunner.query(`ALTER TABLE \`jobs\` ADD \`gabarito\` varchar(255) NOT NULL`);
    }

    public async down(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`ALTER TABLE \`jobs\` DROP COLUMN \`gabarito\``);
        await queryRunner.query(`ALTER TABLE \`jobs\` DROP COLUMN \`alternativa10\``);
        await queryRunner.query(`ALTER TABLE \`jobs\` DROP COLUMN \`pergunta10\``);
        await queryRunner.query(`ALTER TABLE \`jobs\` DROP COLUMN \`alternativa9\``);
        await queryRunner.query(`ALTER TABLE \`jobs\` DROP COLUMN \`pergunta9\``);
        await queryRunner.query(`ALTER TABLE \`jobs\` DROP COLUMN \`alternativa8\``);
        await queryRunner.query(`ALTER TABLE \`jobs\` DROP COLUMN \`pergunta8\``);
        await queryRunner.query(`ALTER TABLE \`jobs\` DROP COLUMN \`alternativa7\``);
        await queryRunner.query(`ALTER TABLE \`jobs\` DROP COLUMN \`pergunta7\``);
        await queryRunner.query(`ALTER TABLE \`jobs\` DROP COLUMN \`alternativa6\``);
        await queryRunner.query(`ALTER TABLE \`jobs\` DROP COLUMN \`pergunta6\``);
        await queryRunner.query(`ALTER TABLE \`jobs\` DROP COLUMN \`alternativa5\``);
        await queryRunner.query(`ALTER TABLE \`jobs\` DROP COLUMN \`pergunta5\``);
        await queryRunner.query(`ALTER TABLE \`jobs\` DROP COLUMN \`alternativa4\``);
        await queryRunner.query(`ALTER TABLE \`jobs\` DROP COLUMN \`pergunta4\``);
        await queryRunner.query(`ALTER TABLE \`jobs\` DROP COLUMN \`alternativa3\``);
        await queryRunner.query(`ALTER TABLE \`jobs\` DROP COLUMN \`pergunta3\``);
        await queryRunner.query(`ALTER TABLE \`jobs\` DROP COLUMN \`alternativa2\``);
        await queryRunner.query(`ALTER TABLE \`jobs\` DROP COLUMN \`pergunta2\``);
        await queryRunner.query(`ALTER TABLE \`jobs\` DROP COLUMN \`alternativa1\``);
        await queryRunner.query(`ALTER TABLE \`jobs\` DROP COLUMN \`pergunta1\``);
    }

}
