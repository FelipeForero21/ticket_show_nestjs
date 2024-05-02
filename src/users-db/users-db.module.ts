import { Module } from '@nestjs/common';
import { UsersDbService } from './users-db.service';
import { UsersDbController } from './users-db.controller';
import { TypeOrmModule } from '@nestjs/typeorm';
import { UsersDb } from './entities/users-db.entity';

@Module({
  imports: [
TypeOrmModule.forFeature([UsersDb])],
  controllers: [UsersDbController],
  providers: [UsersDbService],
  exports: [UsersDbService]
}) 
export class UsersDbModule {}
