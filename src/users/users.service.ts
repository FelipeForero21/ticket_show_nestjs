import { Injectable } from '@nestjs/common';
import { CreateUsersDto } from './dto/create-users.dto';
import { UpdateUsersDto } from './dto/update-users.dto';
import { InjectRepository } from '@nestjs/typeorm';
import { Users } from './entities/users.entity';
import { Repository } from 'typeorm';

@Injectable()
export class UsersService {

  constructor(
    @InjectRepository(Users)
    private readonly userRepository: Repository<Users>
  ) { }


  create(createUsersDto: CreateUsersDto) {
    return this.userRepository.save(createUsersDto)
  }

  findOneByEmail(email: string) {
    return this.userRepository.findOneBy({ email })
  }


  findByEmailWithPassword(email: string) {
    return this.userRepository.findOne({
      where: { email },
      select: ['id', 'username', 'email', 'password'],
      relations: { rol: true },
    });
  }

  findAll() {
    return `This action returns all usersDb`;
  }

  findOne(id: number) {
    return `This action returns a #${id} usersDb`;
  }

  update(id: number, updateUsersDto: UpdateUsersDto) {
    return `This action updates a #${id} usersDb`;
  }

  remove(id: number) {
    return `This action removes a #${id} usersDb`;
  }
}
