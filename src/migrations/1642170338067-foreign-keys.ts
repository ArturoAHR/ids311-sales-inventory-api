import { MigrationInterface, QueryRunner, TableForeignKey } from 'typeorm';

export class foreignKeys1642170338067 implements MigrationInterface {
  public async up(queryRunner: QueryRunner): Promise<void> {
    await queryRunner.createForeignKey(
      'pagos',
      new TableForeignKey({
        columnNames: ['idUsuario'],
        referencedColumnNames: ['id'],
        referencedTableName: 'usuarios',
        onDelete: 'NO ACTION',
        onUpdate: 'NO ACTION',
        name: 'UsuarioUaMPagos',
      }),
    );

    await queryRunner.createForeignKey(
      'ventas',
      new TableForeignKey({
        columnNames: ['idItem'],
        referencedColumnNames: ['id'],
        referencedTableName: 'items',
        onDelete: 'NO ACTION',
        onUpdate: 'NO ACTION',
        name: 'ItemsUaMVentas',
      }),
    );

    await queryRunner.createForeignKey(
      'ventas',
      new TableForeignKey({
        columnNames: ['idPago'],
        referencedColumnNames: ['id'],
        referencedTableName: 'pagos',
        onDelete: 'NO ACTION',
        onUpdate: 'NO ACTION',
        name: 'PagosUaMVentas',
      }),
    );
  }

  async down(queryRunner: QueryRunner): Promise<any> {
    await queryRunner.dropForeignKey(
      'pagos',
      new TableForeignKey({
        columnNames: ['idUsuario'],
        referencedColumnNames: ['id'],
        referencedTableName: 'usuarios',
        onDelete: 'NO ACTION',
        onUpdate: 'NO ACTION',
        name: 'UsuarioUaMPagos',
      }),
    );

    await queryRunner.dropForeignKey(
      'ventas',
      new TableForeignKey({
        columnNames: ['idItem'],
        referencedColumnNames: ['id'],
        referencedTableName: 'items',
        onDelete: 'NO ACTION',
        onUpdate: 'NO ACTION',
        name: 'ItemsUaMVentas',
      }),
    );

    await queryRunner.dropForeignKey(
      'ventas',
      new TableForeignKey({
        columnNames: ['idPago'],
        referencedColumnNames: ['id'],
        referencedTableName: 'pagos',
        onDelete: 'NO ACTION',
        onUpdate: 'NO ACTION',
        name: 'PagosUaMVentas',
      }),
    );
  }
}
