import { Controller, Get, Post, Body, Patch, Param, Delete } from '@nestjs/common';
import { UsersDbService } from './users-db.service';
import { CreateUsersDbDto } from './dto/create-users-db.dto';
import { UpdateUsersDbDto } from './dto/update-users-db.dto';

@Controller('users-db')
export class UsersDbController {
  constructor(private readonly usersDbService: UsersDbService) {}

  @Post()
  create(@Body() createUsersDbDto: CreateUsersDbDto) {
    return this.usersDbService.create(createUsersDbDto);
  }

  @Get()
  findAll() {
    return this.usersDbService.findAll();
  }

  @Get(':id')
  findOne(@Param('id') id: string) {
    return this.usersDbService.findOne(+id);
  }

  @Patch(':id')
  update(@Param('id') id: string, @Body() updateUsersDbDto: UpdateUsersDbDto) {
    return this.usersDbService.update(+id, updateUsersDbDto);
  }

  @Delete(':id')
  remove(@Param('id') id: string) {
    return this.usersDbService.remove(+id);
  }
}
