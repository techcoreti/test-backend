import { MigrationInterface, QueryRunner } from "typeorm";

export class IncludeUnqDocument1715446145020 implements MigrationInterface {
    name = 'IncludeUnqDocument1715446145020'

    public async up(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`ALTER TABLE "producers" ADD CONSTRAINT "UQ_55554aac38152436aa25b1e3530" UNIQUE ("document")`);
        await queryRunner.query(`ALTER TABLE "producers" ALTER COLUMN "type_document" SET DEFAULT 'CPF'`);
    }

    public async down(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`ALTER TABLE "producers" ALTER COLUMN "type_document" SET DEFAULT 'CNPJ'`);
        await queryRunner.query(`ALTER TABLE "producers" DROP CONSTRAINT "UQ_55554aac38152436aa25b1e3530"`);
    }

}
