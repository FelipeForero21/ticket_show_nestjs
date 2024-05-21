import { Injectable, InternalServerErrorException } from '@nestjs/common';
import { UsersService } from 'src/users/users.service';
import { RegisterDto } from './dto/register.tdo';
import { JwtService } from '@nestjs/jwt';
import { LoginDto } from './dto/login.dto';
import { ResponseDTO } from './dto/response.dto';
import * as bcrypt from 'bcrypt';

@Injectable()
export class AuthService {
  constructor(
    private readonly usersService: UsersService,
    private readonly jwtService: JwtService,
  ) { }

  async register({ username, email, password }: RegisterDto) {
    try {
      const ROL_USER = 1;
      const user = await this.usersService.findOneByEmail(email);

      if (user) {
        return {
          success: false,
          message: 'user already exist',
        };
      }
      await this.usersService.create({
        username,
        email,
        password: await bcrypt.hash(password, 10),
        rolId: ROL_USER,
      });

      return {
        success: true,
        message: 'user creaded successful',
        data: {
          username,
          email,
        },
      };
    } catch (error) {
      throw new InternalServerErrorException('service not available', error);
    }
  }

  async login({ email, password }: LoginDto): Promise<ResponseDTO> {
    try {
      const user = await this.usersService.findByEmailWithPassword(email);
      if (!user) {
        return { success: false, message: 'invalid cridentials' };
      }

      const isPasswordValid = await bcrypt.compare(password, user.password);
      if (!isPasswordValid) {
        return { success: false, message: 'invalid cridentials' };
      }

      const payload = {
        username: user.username,
        email: user.email,
        rol: user.rol.name
      };
      const token = await this.jwtService.signAsync(payload);
      return {
        success: true,
        message: 'user found',
        data: { token, email },
      };
    } catch (error) {
      throw new InternalServerErrorException('service not available');
    }
  }
}
