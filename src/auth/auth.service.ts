import { Injectable } from '@nestjs/common';
import { loginDto } from './dto/login-user.dto';
import { User } from 'src/users/entities/user.entity';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';

@Injectable()
export class AuthService {
    constructor(
        @InjectRepository(User)
        private readonly userRepository: Repository<User>,
    ) { }
    async login(dto: loginDto) {
        const user: User = await this.userRepository.findOne({
            where: { email: dto.email, password: dto.password },
            select: { name: true }
        })
        return {
            message: 'user',
            user: user
        }

    }
}
