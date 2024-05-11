import { MigrationInterface, QueryRunner } from "typeorm";

export class IncludeUnqDocumentName1715446294653 implements MigrationInterface {
    name = 'IncludeUnqDocumentName1715446294653'

    public async up(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`ALTER TABLE "producers" ADD CONSTRAINT "UQ_80e0a8f92eb59fe3a9fa4c3c20a" UNIQUE ("name_producer", "document")`);
    }

    public async down(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`ALTER TABLE "producers" DROP CONSTRAINT "UQ_80e0a8f92eb59fe3a9fa4c3c20a"`);
    }

}
