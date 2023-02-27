export const configuration = () => ({
  port: 8080,
  host: '127.0.0.1',
  db: {
    type: 'postgres',
    host: process.env.POSTGRES_HOST || '127.0.0.1',
    port: 5432,
    database: process.env.POSTGRES_DB || 'adc-ua-db',
    username: process.env.POSTGRES_USER || 'postgres',
    password: process.env.POSTGRES_PASSWORD || 'postgres',
    synchronize: false,
    entities: ['dist/entity//*.{ts,js}'],
    ormEntities: ['src/entity//*.ts'],
    migrations: ['src/migration//*.ts'],
    subscribers: ['src/subscriber//*.ts'],
    cli: {
      entitiesDir: 'src/entity',
      migrationsDir: 'src/migration',
      subscribersDir: 'src/subscriber',
    },
  },
  swagger: {
    openapi: '3.0.0',
    title: 'adc-ua API',
    version: '0.1.0',
    license: {
      name: 'MIT',
      url: 'https://spdx.org/licenses/MIT.html',
    },
    contact: {
      name: 'Maks Govoruha',
      url: 'https://github.com/MaksGovor',
      email: 'maksgovruha@gmail.com',
    },
    authorization: {
      type: 'http',
      scheme: 'bearer',
      bearerFormat: 'JWT',
    },
  },
  cors: {
    origin: '*',
    methods: ['GET', 'HEAD', 'PUT', 'PATCH', 'POST', 'DELETE'],
    credentials: true,
  },
});
