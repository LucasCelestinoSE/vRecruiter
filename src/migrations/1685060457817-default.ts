import { MigrationInterface, QueryRunner } from "typeorm";

export class Default1685060457817 implements MigrationInterface {
    name = 'Default1685060457817'

    public async up(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`ALTER TABLE \`companys\` DROP COLUMN \`imageName\``);
        await queryRunner.query(`ALTER TABLE \`companys\` ADD \`imageName\` varchar(10000) NOT NULL`);
    }

    public async down(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`ALTER TABLE \`companys\` DROP COLUMN \`imageName\``);
        await queryRunner.query(`ALTER TABLE \`companys\` ADD \`imageName\` varchar(500) NOT NULL`);
    }

}
