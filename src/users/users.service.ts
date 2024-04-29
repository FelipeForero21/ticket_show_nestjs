import { BadRequestException, ConflictException, Injectable } from '@nestjs/common';
import { CreateUserDto } from './dto/create-user.dto';
import { UpdateUserDto } from './dto/update-user.dto';
import { InjectRepository } from '@nestjs/typeorm';
import { User } from './entities/user.entity';
import { Repository } from 'typeorm';
import { Gender } from 'src/genders/entities/gender.entity';

@Injectable()
export class UsersService {
  constructor(
    @InjectRepository(User)
    private readonly userRepository: Repository<User>,

    @InjectRepository(Gender)
    private readonly genderRepository: Repository<Gender>
  ){}
  
  async create(createUserDto: CreateUserDto) {
    const { identificationNumber } = createUserDto;
    const existingUser = await this.userRepository.findOne({
      where: { identificationNumber },
    });
    if (existingUser) {
      throw new ConflictException(
        'The Identification Number is already in use',
      );
    }
      const gender = await this.genderRepository.findOneBy({
      gender: createUserDto.gender,
    });
    if (!gender) {
      throw new BadRequestException('Gender not found');
    }
    const newUser = this.userRepository.create({ ...createUserDto, gender });
    return await this.userRepository.save(newUser);
  }
  
  async findAll() {
    return await this.userRepository.find();
  }

  async findOne(id: number) {
    return await this.userRepository.findOneBy({id});
  }

  async update(id: number, updateUserDto: UpdateUserDto) {
    return `This action updates a #${id} user`;
  }

  async remove(id: number) {
    return await this.userRepository.softDelete({id});
  }
}
