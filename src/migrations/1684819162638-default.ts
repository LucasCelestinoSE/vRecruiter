import { MigrationInterface, QueryRunner } from "typeorm";

export class Default1684819162638 implements MigrationInterface {
    name = 'Default1684819162638'

    public async up(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`ALTER TABLE \`jobs\` CHANGE \`company\` \`companyId\` int NOT NULL`);
        await queryRunner.query(`ALTER TABLE \`jobs\` CHANGE \`companyId\` \`companyId\` int NULL`);
        await queryRunner.query(`ALTER TABLE \`jobs\` ADD CONSTRAINT \`FK_6ce4483dc65ed9d2e171269d801\` FOREIGN KEY (\`companyId\`) REFERENCES \`companys\`(\`id\`) ON DELETE NO ACTION ON UPDATE NO ACTION`);
    }

    public async down(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`ALTER TABLE \`jobs\` DROP FOREIGN KEY \`FK_6ce4483dc65ed9d2e171269d801\``);
        await queryRunner.query(`ALTER TABLE \`jobs\` CHANGE \`companyId\` \`companyId\` int NOT NULL`);
        await queryRunner.query(`ALTER TABLE \`jobs\` CHANGE \`companyId\` \`company\` int NOT NULL`);
    }

}
