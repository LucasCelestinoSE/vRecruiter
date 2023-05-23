import { MigrationInterface, QueryRunner } from "typeorm";

export class Default1684435886284 implements MigrationInterface {
    name = 'Default1684435886284'

    public async up(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`ALTER TABLE \`companys\` CHANGE \`token\` \`token\` varchar(255) NULL`);
    }

    public async down(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`ALTER TABLE \`companys\` CHANGE \`token\` \`token\` varchar(255) NOT NULL`);
    }

}
