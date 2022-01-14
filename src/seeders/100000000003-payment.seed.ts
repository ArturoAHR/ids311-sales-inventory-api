import { EXAMPLE_PAYMENTS } from '../factories/payment.factory';
import { Connection } from 'typeorm';
import { Factory, Seeder } from 'typeorm-seeding';

export default class CreatePayments implements Seeder {
  public async run(factory: Factory, connection: Connection): Promise<any> {
    await connection
      .createQueryBuilder()
      .insert()
      .into('pagos')
      .values(EXAMPLE_PAYMENTS)
      .execute();
  }
}
