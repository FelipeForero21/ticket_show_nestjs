import { Controller, Get, Post, Body, Patch, Param, Delete, UseGuards } from '@nestjs/common';
import { UsersDbService } from './users-db.service';
import { CreateUsersDbDto } from './dto/create-users-db.dto';
import { UpdateUsersDbDto } from './dto/update-users-db.dto';
import { RolGuard } from 'src/auth/guard/rol-guard';

@Controller('users-db')
export class UsersDbController {
  constructor(private readonly usersDbService: UsersDbService) {}

  @Post()
  @UseGuards(RolGuard)
  create(@Body() createUsersDbDto: CreateUsersDbDto) {
    return this.usersDbService.create(createUsersDbDto);
  }

  @Get()
  @UseGuards(RolGuard)
  findAll() {
    return this.usersDbService.findAll();
  }

  @Get(':id')
  @UseGuards(RolGuard)
  findOne(@Param('id') id: string) {
    return this.usersDbService.findOne(+id);
  }

  @Patch(':id')
  @UseGuards(RolGuard)
  update(@Param('id') id: string, @Body() updateUsersDbDto: UpdateUsersDbDto) {
    return this.usersDbService.update(+id, updateUsersDbDto);
  }

  @Delete(':id')
  @UseGuards(RolGuard)
  remove(@Param('id') id: string) {
    return this.usersDbService.remove(+id);
  }
}
