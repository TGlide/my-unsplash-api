import { createConnection, Connection } from 'typeorm';

export const databaseProviders = [
  {
    provide: 'DATABASE_CONNECTION',
    useFactory: async (): Promise<Connection> =>
      await createConnection({
        type: 'postgres',
        host: process.env['POSTGRES_HOST'],
        port: parseInt(process.env['POSTGRES_PORT']),
        username: process.env['POSTGRES_USER'],
        password: process.env['POSTGRES_PASSWORD'],
        database: process.env['POSTGRES_DATABASE'],
        entities: [__dirname + '/../**/*.entity{.ts,.js}'],
        synchronize: false,
      }),
  },
];
