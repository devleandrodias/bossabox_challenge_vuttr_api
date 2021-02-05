require('dotenv/config');

export = {
  name: 'default',
  type: 'postgres',
  host: process.env.DB_HOST,
  port: Number(process.env.DB_PORT),
  username: process.env.DB_USERNAME,
  password: process.env.DB_PASSWORD,
  database: process.env.DB_DATABASE,
  entities: ['dist/**/*.entity{ .ts,.js}'],
  migrations: ['dist/migrations/*{.ts,.js}'],
  migrationsTableName: 'migrations_typeorm',
  synchronize: false,
  migrationsRun: true,
  logging: true,
  logger: 'file',
  ssl: false,
  cli: {
    entitiesDir: 'dist/**/*.entity{ .ts,.js}',
    migrationsDir: 'src/database/migrations',
  },
};
