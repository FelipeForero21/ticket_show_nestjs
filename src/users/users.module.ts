import { Module } from '@nestjs/common';
import { UsersService } from './users.service';
import { TypeOrmModule } from '@nestjs/typeorm';
import { Users } from './entities/users.entity';
import { Rol } from './entities/rol.entity';

@Module({
  imports: [TypeOrmModule.forFeature([Users, Rol])],
  providers: [UsersService],
  exports: [UsersService],
})
export class UsersModule {}
