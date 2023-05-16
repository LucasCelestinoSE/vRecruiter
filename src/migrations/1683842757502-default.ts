import { MigrationInterface, QueryRunner } from "typeorm";

export class Default1683842757502 implements MigrationInterface {
    name = 'Default1683842757502'

    public async up(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`ALTER TABLE \`jobs\` ADD \`jobTest\` varchar(255) NOT NULL`);
        await queryRunner.query(`ALTER TABLE \`jobs\` ADD \`feedback\` varchar(255) NOT NULL`);
    }

    public async down(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`ALTER TABLE \`jobs\` DROP COLUMN \`feedback\``);
        await queryRunner.query(`ALTER TABLE \`jobs\` DROP COLUMN \`jobTest\``);
    }

}
