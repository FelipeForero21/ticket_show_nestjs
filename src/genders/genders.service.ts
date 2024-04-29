import { Injectable } from '@nestjs/common';
import { CreateGenderDto } from './dto/create-gender.dto';
import { UpdateGenderDto } from './dto/update-gender.dto';
import { Gender } from './entities/gender.entity';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';

@Injectable()
export class GendersService {
  constructor(
    @InjectRepository(Gender)
    private readonly genderRepository: Repository<Gender>
  ){}


 async create(createGenderDto: CreateGenderDto) {
    return await this.genderRepository.save(createGenderDto);
  }

 async findAll() {
    return await this.genderRepository.find()
  }

 async findOne(id: number) {
    return await `This action returns a #${id} gender`;
  }

//  async update(id: number, updateGenderDto: UpdateGenderDto) {
//     return await `This action updates a #${id} gender`;
//   }

 async remove(id: number) {
  return await this.genderRepository.delete({id});
}
}
