import { MigrationInterface, QueryRunner } from "typeorm";

export class Default1685060887789 implements MigrationInterface {
    name = 'Default1685060887789'

    public async up(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`ALTER TABLE \`companys\` CHANGE \`imageName\` \`imageName\` varchar(255) NULL`);
    }

    public async down(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`ALTER TABLE \`companys\` CHANGE \`imageName\` \`imageName\` varchar(255) NOT NULL`);
    }

}
