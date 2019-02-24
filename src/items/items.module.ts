import { Module } from '@nestjs/common';
import { MongooseModule } from '@nestjs/mongoose';
import { ItemsController } from './items/items.controller';
import { ItemsService } from './items/items.service';
import { ItemsSchema } from './schemas/items.schema';

@Module({
  imports: [MongooseModule.forFeature([{ name: 'Items', schema: ItemsSchema }])],
  controllers: [ItemsController],
  providers: [ItemsService]
})
export class ItemsModule {}
