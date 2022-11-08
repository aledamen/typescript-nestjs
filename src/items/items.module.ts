import { Module } from '@nestjs/common';
import { ItemsService } from './items.service';
import { ItemsController } from './items.controller';
import { Items, Itemschema } from './schema/items.schema';
import { MongooseModule } from '@nestjs/mongoose';

@Module({
  imports: [
    //aqui puedo importar todos los schema que utilice
    MongooseModule.forFeature([
      {
        name: Items.name,
        schema: Itemschema,
      },
    ]),
  ],
  controllers: [ItemsController],
  providers: [ItemsService],
})
export class ItemsModule {}
