import { Module } from '@nestjs/common';
import { ItemsModule } from './items/items.module';
import { DatabaseModule } from './database/database.module';


@Module({
  imports: [ItemsModule, DatabaseModule]
})
export class AppModule {}
