import { MigrationInterface, QueryRunner, Table } from 'typeorm';

export class items1642155401075 implements MigrationInterface {
  public async up(queryRunner: QueryRunner): Promise<void> {
    await queryRunner.createTable(
      new Table({
        name: 'items',
        columns: [
          {
            name: 'id',
            type: 'uuid',
            isNullable: false,
            isPrimary: true,
            default: 'uuid_generate_v4()',
          },
          {
            name: 'nombreItem',
            type: 'varchar',
            isNullable: false,
          },
          {
            name: 'existencias',
            type: 'numeric',
            isNullable: false,
          },
          {
            name: 'precio',
            type: 'numeric',
            isNullable: false,
          },
          {
            name: 'fechaRegistro',
            type: 'timestamp',
            isNullable: false,
            default: 'now()',
          },
          {
            name: 'fechaEliminacion',
            type: 'timestamp',
            isNullable: true,
          },
        ],
      }),
      true,
    );
  }

  public async down(queryRunner: QueryRunner): Promise<void> {
    queryRunner.dropTable('items', true);
  }
}
