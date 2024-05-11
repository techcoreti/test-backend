import { MigrationInterface, QueryRunner } from "typeorm";

export class IncludeAreaArableCultivation1715454798689 implements MigrationInterface {
    name = 'IncludeAreaArableCultivation1715454798689'

    public async up(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`ALTER TABLE "cultivations" ADD "area_arable" integer NOT NULL`);
    }

    public async down(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`ALTER TABLE "cultivations" DROP COLUMN "area_arable"`);
    }

}
