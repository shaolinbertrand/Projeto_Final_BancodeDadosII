import {MigrationInterface, QueryRunner, Table} from "typeorm";

export class createHistorico1608078549577 implements MigrationInterface {
  public async up(queryRunner: QueryRunner): Promise<void> {
    await queryRunner.createTable(new Table({
      name: 'historico',
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
          name: 'jogo',
          type: 'varchar',
        },
        {
          name: 'user_id',
          type: 'integer',
        }
      ],
      foreignKeys: [
        {
          name: 'HistoricoUser',
          columnNames: ['user_id'],
          referencedTableName: 'users',
          referencedColumnNames: ['id'],
          onUpdate: 'CASCADE',
          onDelete: 'CASCADE',
        }
      ]
    }))
  
  }

  public async down(queryRunner: QueryRunner): Promise<void> {
    await queryRunner.dropTable('historico')
  }

}
