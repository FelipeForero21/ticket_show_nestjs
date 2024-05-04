import { Injectable } from '@nestjs/common';
import { CreateUsersDbDto } from './dto/create-users-db.dto';
import { UpdateUsersDbDto } from './dto/update-users-db.dto';
import { InjectRepository } from '@nestjs/typeorm';
import { UsersDb } from './entities/users-db.entity';
import { Repository } from 'typeorm';

@Injectable()
export class UsersDbService {

  constructor (
    @InjectRepository(UsersDb)
    private readonly userDbRepository: Repository<UsersDb>
  ) {}

  
  create(createUsersDbDto: CreateUsersDbDto) {
    return this.userDbRepository.save(createUsersDbDto)
  }

  findOneByEmail(email: string){
   return this.userDbRepository.findOneBy({email})}


   findByEmailWithPassword(email: string) {
    return this.userDbRepository.findOne({
      where: { email },
      select: ['id', 'name', 'email', 'password', 'rol'],
    });
  }


  findAll() {
    return `This action returns all usersDb`;
  }

  findOne(id: number) {
    return `This action returns a #${id} usersDb`;
  }

  update(id: number, updateUsersDbDto: UpdateUsersDbDto) {
    return `This action updates a #${id} usersDb`;
  }

  remove(id: number) {
    return `This action removes a #${id} usersDb`;
  }
}
