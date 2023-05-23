import { MigrationInterface, QueryRunner } from "typeorm";

export class Default1684435007640 implements MigrationInterface {
    name = 'Default1684435007640'

    public async up(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`ALTER TABLE \`companys\` ADD \`token\` varchar(255) NOT NULL`);
    }

    public async down(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`ALTER TABLE \`companys\` DROP COLUMN \`token\``);
    }

}
