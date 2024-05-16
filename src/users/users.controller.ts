import { Controller, Get, Post, Body, Patch, Param, Delete, UseGuards } from '@nestjs/common';
import { UsersService } from './users.service';
import { CreateUsersDto } from './dto/create-users.dto';
import { UpdateUsersDto } from './dto/update-users.dto';
import { RolGuard } from 'src/auth/guard/rol-guard';
import { ApiBadRequestResponse, ApiBearerAuth, ApiCreatedResponse, ApiForbiddenResponse, ApiNotFoundResponse, ApiOkResponse, ApiTags } from '@nestjs/swagger';

@ApiTags('Auth')
@ApiBearerAuth()
@Controller('users-db')
export class UsersController {
  constructor(private readonly usersService: UsersService) {}

  @Post()
  @ApiCreatedResponse({description: 'The record has been successfully created'})
  @ApiForbiddenResponse({description:'Forbidden.'})
  @UseGuards(RolGuard)
  create(@Body() createUsersDto: CreateUsersDto) {
    return this.usersService.create(createUsersDto);
  }

  @Get()
  @ApiOkResponse({description: 'OK'})
  @ApiNotFoundResponse({description: 'Not Found'})
  @UseGuards(RolGuard)
  findAll() {
    return this.usersService.findAll();
  }

  @Get(':id')
  @ApiOkResponse({description: 'OK'})
  @ApiNotFoundResponse({description: 'Not Found'})
  @UseGuards(RolGuard)
  findOne(@Param('id') id: string) {
    return this.usersService.findOne(+id);
  }

  @Patch(':id')
  @ApiOkResponse({description: 'OK'})
  @ApiBadRequestResponse({description: 'Bad Request'})
  @UseGuards(RolGuard)
  update(@Param('id') id: string, @Body() updateUsersDto: UpdateUsersDto) {
    return this.usersService.update(+id, updateUsersDto);
  }

  @Delete(':id')
  @ApiOkResponse({description: 'OK'})
  @ApiBadRequestResponse({description: 'Bad Request'})
  @UseGuards(RolGuard)
  remove(@Param('id') id: string) {
    return this.usersService.remove(+id);
  }
}
