import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { UsersController } from './users.controller';
import { UsersService } from './users.service';
import { User } from './entities/user.entity';
import { GendersModule } from 'src/genders/genders.module';
import { GendersService } from 'src/genders/genders.service';


@Module({
  imports: [TypeOrmModule.forFeature([User]), GendersModule],
  controllers: [UsersController],
  providers: [UsersService, GendersService],
})
export class UsersModule {}
