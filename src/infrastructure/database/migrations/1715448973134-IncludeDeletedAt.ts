import { MigrationInterface, QueryRunner } from "typeorm";

export class IncludeDeletedAt1715448973134 implements MigrationInterface {
    name = 'IncludeDeletedAt1715448973134'

    public async up(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`ALTER TABLE "cultivations" ADD "deleted_at" TIMESTAMP`);
        await queryRunner.query(`ALTER TABLE "producers" ADD "deleted_at" TIMESTAMP`);
    }

    public async down(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`ALTER TABLE "producers" DROP COLUMN "deleted_at"`);
        await queryRunner.query(`ALTER TABLE "cultivations" DROP COLUMN "deleted_at"`);
    }

}
