import { Controller, Get, Post, Body, Patch, Param, Delete, UseGuards } from '@nestjs/common';
import { UsersDbService } from './users-db.service';
import { CreateUsersDbDto } from './dto/create-users-db.dto';
import { UpdateUsersDbDto } from './dto/update-users-db.dto';
import { RolGuard } from 'src/auth/guard/rol-guard';
import { ApiBadRequestResponse, ApiBearerAuth, ApiCreatedResponse, ApiForbiddenResponse, ApiNotFoundResponse, ApiOkResponse, ApiTags } from '@nestjs/swagger';

@ApiTags('Auth')
@ApiBearerAuth()
@Controller('users-db')
export class UsersDbController {
  constructor(private readonly usersDbService: UsersDbService) {}

  @Post()
  @ApiCreatedResponse({description: 'The record has been successfully created'})
  @ApiForbiddenResponse({description:'Forbidden.'})
  @UseGuards(RolGuard)
  create(@Body() createUsersDbDto: CreateUsersDbDto) {
    return this.usersDbService.create(createUsersDbDto);
  }

  @Get()
  @ApiOkResponse({description: 'OK'})
  @ApiNotFoundResponse({description: 'Not Found'})
  @UseGuards(RolGuard)
  findAll() {
    return this.usersDbService.findAll();
  }

  @Get(':id')
  @ApiOkResponse({description: 'OK'})
  @ApiNotFoundResponse({description: 'Not Found'})
  @UseGuards(RolGuard)
  findOne(@Param('id') id: string) {
    return this.usersDbService.findOne(+id);
  }

  @Patch(':id')
  @ApiOkResponse({description: 'OK'})
  @ApiBadRequestResponse({description: 'Bad Request'})
  @UseGuards(RolGuard)
  update(@Param('id') id: string, @Body() updateUsersDbDto: UpdateUsersDbDto) {
    return this.usersDbService.update(+id, updateUsersDbDto);
  }

  @Delete(':id')
  @ApiOkResponse({description: 'OK'})
  @ApiBadRequestResponse({description: 'Bad Request'})
  @UseGuards(RolGuard)
  remove(@Param('id') id: string) {
    return this.usersDbService.remove(+id);
  }
}
