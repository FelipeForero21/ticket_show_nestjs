import { Body, Controller, Get, Post, Request, UseGuards, Res, HttpStatus } from '@nestjs/common';
import { AuthService } from './auth.service';
import { RegisterDto } from './dto/register.tdo';
import { LoginDto } from './dto/login.dto';
import { AuthGuard } from './guard/auth.guard';

@Controller('auth')
export class AuthController {
  constructor(private readonly authService: AuthService) { }

  @Post('register')
   async register( @Res() res, @Body() registerDto: RegisterDto) {
    const response = await this.authService.register(registerDto);
    if (!response.success){
    return res.status(HttpStatus.BAD_REQUEST).send(response);
    }
    return res.status(HttpStatus.CREATED).send(response);

  }

  @Post('login')
  async login(@Res() res, @Body() loginDto: LoginDto) {  
    const response = await this.authService.login(loginDto);
    if (!response.success){
      return res.status(HttpStatus.BAD_REQUEST).send(response)
    }
  }


  @Get('profile')
  @UseGuards(AuthGuard)
  profile(
    @Request()
    req,
  ) {
    return req.user;
  }
}
