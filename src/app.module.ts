import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { TypeOrmModule } from '@nestjs/typeorm';
import * as dbConfig from '../configdb.json';

@Module({
  imports: [
    TypeOrmModule.forRoot({
      type: 'postgres',
      url: dbConfig.url,
      entities: [],
      synchronize: true,
      autoLoadEntities: true,
    }),
  ],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
