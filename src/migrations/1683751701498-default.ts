import { MigrationInterface, QueryRunner } from "typeorm";

export class Default1683751701498 implements MigrationInterface {
    name = 'Default1683751701498'

    public async up(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`ALTER TABLE \`jobs\` ADD \`etapa\` int NOT NULL`);
    }

    public async down(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`ALTER TABLE \`jobs\` DROP COLUMN \`etapa\``);
    }

}
