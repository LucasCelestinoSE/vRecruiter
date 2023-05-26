import { MigrationInterface, QueryRunner } from "typeorm";

export class Default1685145122385 implements MigrationInterface {
    name = 'Default1685145122385'

    public async up(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`ALTER TABLE \`companys\` DROP COLUMN \`imageName\``);
    }

    public async down(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`ALTER TABLE \`companys\` ADD \`imageName\` varchar(255) NULL`);
    }

}
