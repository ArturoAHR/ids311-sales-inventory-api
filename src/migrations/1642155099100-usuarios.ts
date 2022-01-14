import { MigrationInterface, QueryRunner, Table } from 'typeorm';

export class usuarios1642155099100 implements MigrationInterface {
  public async up(queryRunner: QueryRunner): Promise<void> {
    await queryRunner.createTable(
      new Table({
        name: 'usuarios',
        columns: [
          {
            name: 'id',
            type: 'uuid',
            isNullable: false,
            isPrimary: true,
            default: 'uuid_generate_v4()',
          },
          {
            name: 'nombre',
            type: 'varchar',
            isNullable: false,
          },
          {
            name: 'apellido',
            type: 'varchar',
            isNullable: false,
          },
          {
            name: 'fechaNacimiento',
            type: 'TIMESTAMP',
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
    queryRunner.dropTable('usuarios', true);
  }
}
