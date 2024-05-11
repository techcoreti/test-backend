import { MigrationInterface, QueryRunner } from "typeorm";

export class InitialMigrations1715468742422 implements MigrationInterface {
    name = 'InitialMigrations1715468742422'

    public async up(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`CREATE TABLE "cultivations" ("id" uuid NOT NULL DEFAULT uuid_generate_v4(), "created_at" TIMESTAMP NOT NULL DEFAULT now(), "updated_at" TIMESTAMP NOT NULL DEFAULT now(), "deleted_at" TIMESTAMP, "name" character varying NOT NULL, "description" character varying NOT NULL, "area_arable" integer NOT NULL, "is_active" boolean NOT NULL DEFAULT true, "producer_id" uuid, CONSTRAINT "PK_b28ad6f7b0b4076361b0ce43c2a" PRIMARY KEY ("id"))`);
        await queryRunner.query(`CREATE TABLE "producers" ("id" uuid NOT NULL DEFAULT uuid_generate_v4(), "created_at" TIMESTAMP NOT NULL DEFAULT now(), "updated_at" TIMESTAMP NOT NULL DEFAULT now(), "deleted_at" TIMESTAMP, "name_producer" character varying NOT NULL, "document" character varying NOT NULL, "type_document" character varying NOT NULL DEFAULT 'CPF', "name_ranch" character varying NOT NULL, "county" character varying NOT NULL, "state" character varying(2) NOT NULL, "total_hectare_area" integer NOT NULL, "total_arable_area" integer NOT NULL, "total_vegetation_area" integer NOT NULL, "is_active" boolean NOT NULL DEFAULT true, CONSTRAINT "UQ_80e0a8f92eb59fe3a9fa4c3c20a" UNIQUE ("name_producer", "document"), CONSTRAINT "UQ_55554aac38152436aa25b1e3530" UNIQUE ("document"), CONSTRAINT "PK_7f16886d1a44ed0974232b82506" PRIMARY KEY ("id"))`);
        await queryRunner.query(`ALTER TABLE "cultivations" ADD CONSTRAINT "id" FOREIGN KEY ("producer_id") REFERENCES "producers"("id") ON DELETE NO ACTION ON UPDATE NO ACTION`);
    }

    public async down(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`ALTER TABLE "cultivations" DROP CONSTRAINT "id"`);
        await queryRunner.query(`DROP TABLE "producers"`);
        await queryRunner.query(`DROP TABLE "cultivations"`);
    }

}
