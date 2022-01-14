import * as dotenv from 'dotenv';

dotenv.config();

const config = {
  type: 'postgres',
  host: process.env.TYPEORM_HOST,
  port: Number(process.env.TYPEORM_PORT),
  username: process.env.TYPEORM_USERNAME,
  password: process.env.TYPEORM_PASSWORD,
  database: process.env.TYPEORM_DATABASE,
  entities: [process.env.TYPEORM_ENTITIES],
  cli: {
    migrationsDir: process.env.TYPEORM_MIGRATIONS,
  },
  seeds: [process.env.TYPEORM_SEEDING_SEEDS],
  factories: [process.env.TYPEORM_SEEDING_FACTORIES],
};

console.log(process.env.TYPEORM_SEEDING_SEEDS);

export = config;
