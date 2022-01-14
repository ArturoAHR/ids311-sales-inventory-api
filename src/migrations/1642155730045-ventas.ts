import { MigrationInterface, QueryRunner, Table } from 'typeorm';

export class ventas1642155730045 implements MigrationInterface {
  public async up(queryRunner: QueryRunner): Promise<void> {
    await queryRunner.createTable(
      new Table({
        name: 'ventas',
        columns: [
          {
            name: 'id',
            type: 'uuid',
            isNullable: false,
            isPrimary: true,
            default: 'uuid_generate_v4()',
          },
          {
            name: 'idItem',
            type: 'uuid',
            isNullable: false,
          },
          {
            name: 'idPago',
            type: 'uuid',
            isNullable: false,
          },
          {
            name: 'cantidad',
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
        ],
      }),
      true,
    );
  }

  public async down(queryRunner: QueryRunner): Promise<void> {
    queryRunner.dropTable('items', true);
  }
}
