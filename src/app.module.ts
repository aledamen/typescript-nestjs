import { Module } from '@nestjs/common';
import { MongooseModule } from '@nestjs/mongoose';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { ItemsModule } from './items/items.module';

@Module({
  imports: [
    MongooseModule.forRoot(
      'mongodb+srv://test:1234567890@nestjs.rynpbl4.mongodb.net/nestjs?retryWrites=true&w=majority',
    ),
    ItemsModule,
  ], //aqui se importan los resource que genero
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
