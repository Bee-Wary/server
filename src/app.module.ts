import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { ConfigModule } from '@nestjs/config';
import { MongooseModule } from '@nestjs/mongoose';
import { BeehiveModule } from './beehives/beehives.module';

@Module({
  imports: [
    ConfigModule.forRoot(),
    MongooseModule.forRoot(process.env.MONGO_URL as string, { dbName: process.env.MONGO_DATABASE}),
    BeehiveModule
  ],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule { }
