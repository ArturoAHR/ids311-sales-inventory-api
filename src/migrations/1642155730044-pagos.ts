import { MigrationInterface, QueryRunner, Table } from 'typeorm';

export class pagos1642156076824 implements MigrationInterface {
  public async up(queryRunner: QueryRunner): Promise<void> {
    await queryRunner.createTable(
      new Table({
        name: 'pagos',
        columns: [
          {
            name: 'id',
            type: 'uuid',
            isNullable: false,
            isPrimary: true,
            default: 'uuid_generate_v4()',
          },
          {
            name: 'idUsuario',
            type: 'uuid',
            isNullable: false,
          },
          {
            name: 'montoTotal',
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
