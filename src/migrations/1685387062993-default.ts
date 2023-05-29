import { MigrationInterface, QueryRunner } from "typeorm";

export class Default1685387062993 implements MigrationInterface {
    name = 'Default1685387062993'

    public async up(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`CREATE TABLE \`contatos\` (\`id\` int NOT NULL AUTO_INCREMENT, \`name\` varchar(255) NOT NULL, \`email\` varchar(255) NOT NULL, \`telefone\` varchar(255) NOT NULL, \`empresa_nome\` varchar(255) NOT NULL, \`cargo\` varchar(255) NOT NULL, \`funcionarios\` int NOT NULL, \`array\` varchar(255) NOT NULL, PRIMARY KEY (\`id\`)) ENGINE=InnoDB`);
    }

    public async down(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`DROP TABLE \`contatos\``);
    }

}
