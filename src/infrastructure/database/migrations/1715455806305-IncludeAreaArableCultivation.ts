import { MigrationInterface, QueryRunner } from "typeorm";

export class IncludeAreaArableCultivation1715455806305 implements MigrationInterface {
    name = 'IncludeAreaArableCultivation1715455806305'

    public async up(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`ALTER TABLE "cultivations" DROP CONSTRAINT "FK_ec937d6dd8d624a559f12373012"`);
        await queryRunner.query(`ALTER TABLE "cultivations" ADD CONSTRAINT "id" FOREIGN KEY ("producer_id") REFERENCES "producers"("id") ON DELETE NO ACTION ON UPDATE NO ACTION`);
    }

    public async down(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`ALTER TABLE "cultivations" DROP CONSTRAINT "id"`);
        await queryRunner.query(`ALTER TABLE "cultivations" ADD CONSTRAINT "FK_ec937d6dd8d624a559f12373012" FOREIGN KEY ("producer_id") REFERENCES "producers"("id") ON DELETE NO ACTION ON UPDATE NO ACTION`);
    }

}
