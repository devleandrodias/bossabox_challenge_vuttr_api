import {MigrationInterface, QueryRunner} from "typeorm";

export class GenerateTableTool1612484874575 implements MigrationInterface {
    name = 'GenerateTableTool1612484874575'

    public async up(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`CREATE TABLE "tool" ("id" uuid NOT NULL DEFAULT uuid_generate_v4(), "title" character varying(50) NOT NULL, "link" character varying(500) NOT NULL, "description" text NOT NULL, "tags" text NOT NULL, "createdAt" TIMESTAMP NOT NULL DEFAULT now(), "updatedAt" TIMESTAMP NOT NULL DEFAULT now(), CONSTRAINT "PK_3bf5b1016a384916073184f99b7" PRIMARY KEY ("id"))`);
    }

    public async down(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`DROP TABLE "tool"`);
    }

}
