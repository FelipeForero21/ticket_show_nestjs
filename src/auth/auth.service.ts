import {
  BadRequestException,
  Injectable,
  UnauthorizedException,
} from '@nestjs/common';
import { UsersDbService } from 'src/users-db/users-db.service';
import { RegisterDto } from './dto/register.tdo';
import * as bcryptjs from 'bcryptjs';
import { JwtService } from '@nestjs/jwt';
import { LoginDto } from './dto/login.dto';


@Injectable()
export class AuthService {
  constructor(
    private readonly usersDbService: UsersDbService,
    private readonly jwtService: JwtService,
  ) {}

  async register({ name, email, password }: RegisterDto) {
    const user = await this.usersDbService.findOneByEmail(email);

    if (user) {
      throw new BadRequestException('User already exists');
    }
     await this.usersDbService.create({
      name,
      email,
      password: await bcryptjs.hash(password, 10),
    });

    return {
      name,
      email,
    };
  }

  async login({ email, password }: LoginDto) {
    const user = await this.usersDbService.findByEmailWithPassword(email);
    if (!user) {
      throw new UnauthorizedException('email is wrong');
    }

    const isPasswordValid = await bcryptjs.compare(password, user.password);
    if (!isPasswordValid) {
      throw new UnauthorizedException('Password is wrong');
    }

    const payload = {email: user.email, rol: user.rol};
    const token = await this.jwtService.signAsync(payload )
    return {token, email, rol:user.rol };
  }
}
    
