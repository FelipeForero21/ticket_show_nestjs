import { Body, Controller, Post } from '@nestjs/common';
import { loginDto } from './dto/login-user.dto';
import { AuthService } from './auth.service';

@Controller('auth')
export class AuthController {
    constructor(private readonly authService:AuthService){}

    @Post('login')
    login(@Body() dto: loginDto) {
        return this.authService.login(dto)
    }

    
}
