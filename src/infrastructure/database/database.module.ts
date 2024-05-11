import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { datasource } from './config/postgres.provider';

@Module({
  imports: [
    TypeOrmModule.forRootAsync({ useFactory: () => Object.assign(datasource) }),
  ],
})
export class DatabaseModule {}
