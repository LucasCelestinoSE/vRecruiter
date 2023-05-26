import { MigrationInterface, QueryRunner } from "typeorm";

export class Default1685060578557 implements MigrationInterface {
    name = 'Default1685060578557'

    public async up(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`ALTER TABLE \`companys\` DROP COLUMN \`imageName\``);
        await queryRunner.query(`ALTER TABLE \`companys\` ADD \`imageName\` varchar(255) NOT NULL`);
    }

    public async down(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`ALTER TABLE \`companys\` DROP COLUMN \`imageName\``);
        await queryRunner.query(`ALTER TABLE \`companys\` ADD \`imageName\` varchar(10000) NOT NULL`);
    }

}
