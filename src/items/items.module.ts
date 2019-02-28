import { Module } from '@nestjs/common';

import { ItemsController } from './items/items.controller';
import { ItemsService } from './items/items.service';

import { DatabaseModule } from 'src/database/database.module';
import { itemsProviders } from './item.provider';

@Module({
  imports: [DatabaseModule],
  controllers: [ItemsController],
  providers: [ItemsService, ...itemsProviders],
})
export class ItemsModule {}
