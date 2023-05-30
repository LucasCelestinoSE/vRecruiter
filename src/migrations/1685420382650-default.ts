import { MigrationInterface, QueryRunner } from "typeorm";

export class Default1685420382650 implements MigrationInterface {
    name = 'Default1685420382650'

    public async up(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`ALTER TABLE \`userjobs\` CHANGE \`right_answers\` \`right_answers\` int NULL`);
    }

    public async down(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`ALTER TABLE \`userjobs\` CHANGE \`right_answers\` \`right_answers\` int NOT NULL`);
    }

}
