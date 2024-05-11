import { MigrationInterface, QueryRunner } from "typeorm";

export class InitialDatabase1715397602265 implements MigrationInterface {
    name = 'InitialDatabase1715397602265'

    public async up(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`CREATE TABLE "cultivations" ("id" uuid NOT NULL DEFAULT uuid_generate_v4(), "created_at" TIMESTAMP NOT NULL DEFAULT now(), "updated_at" TIMESTAMP NOT NULL DEFAULT now(), "name" character varying NOT NULL, "description" character varying NOT NULL, "is_active" boolean NOT NULL DEFAULT true, "producer_id" uuid, CONSTRAINT "PK_b28ad6f7b0b4076361b0ce43c2a" PRIMARY KEY ("id"))`);
        await queryRunner.query(`CREATE TABLE "producers" ("id" uuid NOT NULL DEFAULT uuid_generate_v4(), "created_at" TIMESTAMP NOT NULL DEFAULT now(), "updated_at" TIMESTAMP NOT NULL DEFAULT now(), "name_producer" character varying NOT NULL, "document" character varying NOT NULL, "name_ranch" character varying NOT NULL, "county" character varying NOT NULL, "state" character varying(2) NOT NULL, "total_hectare_area" integer NOT NULL, "total_arable_area" integer NOT NULL, "total_vegetation_area" integer NOT NULL, "is_active" boolean NOT NULL DEFAULT true, CONSTRAINT "PK_7f16886d1a44ed0974232b82506" PRIMARY KEY ("id"))`);
        await queryRunner.query(`ALTER TABLE "cultivations" ADD CONSTRAINT "FK_ec937d6dd8d624a559f12373012" FOREIGN KEY ("producer_id") REFERENCES "producers"("id") ON DELETE NO ACTION ON UPDATE NO ACTION`);
    }

    public async down(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`ALTER TABLE "cultivations" DROP CONSTRAINT "FK_ec937d6dd8d624a559f12373012"`);
        await queryRunner.query(`DROP TABLE "producers"`);
        await queryRunner.query(`DROP TABLE "cultivations"`);
    }

}
