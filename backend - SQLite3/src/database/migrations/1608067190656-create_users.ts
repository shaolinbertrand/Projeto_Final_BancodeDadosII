import {MigrationInterface, QueryRunner, Table} from "typeorm";

export class createUsers1608067190656 implements MigrationInterface {
  public async up(queryRunner: QueryRunner): Promise<void> {
    await queryRunner.createTable(new Table({
      name: 'users',
      columns: [
        {
          name: 'id',
          type: 'integer',
          unsigned: true,
          isPrimary: true,
          isGenerated: true,
          generationStrategy: 'increment',
        },
        {
          name: 'name',
          type: 'varchar'
        },
        {
          name: 'usuario',
          type: 'varchar',
        },
        {
          name: 'senha',
          type: 'varchar'
        },
        {
          name: 'birthday',
          type: 'date'
        }
      ]
    }))
  }

  public async down(queryRunner: QueryRunner): Promise<void> {
    await queryRunner.dropTable('users')
  }

}
