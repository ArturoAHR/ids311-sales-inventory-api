import { EXAMPLE_ITEMS } from '../factories/item.factory';
import { Connection } from 'typeorm';
import { Factory, Seeder } from 'typeorm-seeding';

export default class CreateItems implements Seeder {
  public async run(factory: Factory, connection: Connection): Promise<any> {
    await connection
      .createQueryBuilder()
      .insert()
      .into('items')
      .values(EXAMPLE_ITEMS)
      .execute();
  }
}
