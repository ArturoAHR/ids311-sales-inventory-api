import { EXAMPLE_USERS } from '../factories/user.factory';
import { Connection } from 'typeorm';
import { Factory, Seeder } from 'typeorm-seeding';

export default class CreateUsers implements Seeder {
  public async run(factory: Factory, connection: Connection): Promise<any> {
    await connection
      .createQueryBuilder()
      .insert()
      .into('usuarios')
      .values(EXAMPLE_USERS)
      .execute();
  }
}
