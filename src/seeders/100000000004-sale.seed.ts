import { EXAMPLE_SALES } from '../factories/sale.factory';
import { Connection } from 'typeorm';
import { Factory, Seeder } from 'typeorm-seeding';

export default class CreateSales implements Seeder {
  public async run(factory: Factory, connection: Connection): Promise<any> {
    await connection
      .createQueryBuilder()
      .insert()
      .into('ventas')
      .values(EXAMPLE_SALES)
      .execute();
  }
}
