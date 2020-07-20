import { Connection, Repository } from 'typeorm';
import { Image } from './image.entity';

export const imageProviders = [
  {
    provide: 'IMAGE_REPOSITORY',
    useFactory: (connection: Connection): Repository<Image> =>
      connection.getRepository(Image),
    inject: ['DATABASE_CONNECTION'],
  },
];
