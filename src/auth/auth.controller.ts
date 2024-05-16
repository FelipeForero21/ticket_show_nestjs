import { Body, Controller, Get, Post, Request, UseGuards, Res, HttpStatus } from '@nestjs/common';
import { AuthService } from './auth.service';
import { RegisterDto } from './dto/register.tdo';
import { LoginDto } from './dto/login.dto';
import { AuthGuard } from './guard/auth.guard';
import { ApiCreatedResponse, ApiForbiddenResponse, ApiTags, ApiUnauthorizedResponse, ApiFoundResponse, ApiBadRequestResponse, ApiOkResponse } from '@nestjs/swagger';

@ApiTags('Users')
@Controller('auth')
export class AuthController {
  constructor(private readonly authService: AuthService) { }

  @Post('register')
  @ApiCreatedResponse({ description: 'The record has been successfully created' })
  @ApiForbiddenResponse({ description: 'Forbidden.' })
  async register(@Res() res, @Body() registerDto: RegisterDto) {
    const response = await this.authService.register(registerDto);
    if (!response.success) {
      return res.status(HttpStatus.BAD_REQUEST).send(response);
    }
    return res.status(HttpStatus.CREATED).send(response);

  }

  @Post('login')
  @ApiFoundResponse({ description: 'OK' })
  @ApiUnauthorizedResponse({ description: 'Unauthorized' })
  async login(@Res() res, @Body() loginDto: LoginDto): Promise<any> {
    const response = await this.authService.login(loginDto);
    if (!response.success) {
      return res.status(HttpStatus.BAD_REQUEST).send(response)
    }
    return res.status(HttpStatus.OK).send(response)
  }

  @Get('profile')
  @ApiOkResponse({ description: 'OK' })
  @ApiBadRequestResponse({ description: 'Bad Request' })
  @UseGuards(AuthGuard)
  profile(
    @Request()
    req,
  ) {
    return req.user;
  }
}
