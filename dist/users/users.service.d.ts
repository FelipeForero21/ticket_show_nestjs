import { CreateUserDto } from './dto/create-user.dto';
import { UpdateUserDto } from './dto/update-user.dto';
import { User } from './entities/user.entity';
import { Repository } from 'typeorm';
import { Gender } from 'src/genders/entities/gender.entity';
export declare class UsersService {
    private readonly userRepository;
    private readonly genderRepository;
    constructor(userRepository: Repository<User>, genderRepository: Repository<Gender>);
    create(createUserDto: CreateUserDto): Promise<User>;
    findAll(): Promise<User[]>;
    findOne(id: number): Promise<User>;
    update(id: number, updateUserDto: UpdateUserDto): Promise<string>;
    remove(id: number): Promise<import("typeorm").UpdateResult>;
}
