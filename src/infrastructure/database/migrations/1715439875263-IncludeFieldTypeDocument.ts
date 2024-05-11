import { MigrationInterface, QueryRunner } from "typeorm";

export class IncludeFieldTypeDocument1715439875263 implements MigrationInterface {
    name = 'IncludeFieldTypeDocument1715439875263'

    public async up(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`ALTER TABLE "producers" ADD "type_document" character varying NOT NULL`);
    }

    public async down(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`ALTER TABLE "producers" DROP COLUMN "type_document"`);
    }

}
