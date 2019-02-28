import { Connection } from 'mongoose';
import { ItemsSchema } from './schemas/items.schema';

export const itemsProviders = [
  {
    provide: 'ItemModelToken',
    useFactory: (connection: Connection) => connection.model('Items', ItemsSchema),
    inject: ['DbConnectionToken'],
  },
];
