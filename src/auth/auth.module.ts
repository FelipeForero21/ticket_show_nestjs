import { Module } from '@nestjs/common';
import { AuthController } from './auth.controller';
import { UsersDbModule } from 'src/users-db/users-db.module';
import { AuthService } from './auth.service';
import { JwtModule } from '@nestjs/jwt';
import { jwtConstants } from './constants/jwt.constant';
@Module({ 
  imports: [ UsersDbModule,
  JwtModule.register({
    global: true,
    secret: jwtConstants.secret,
     signOptions: {expiresIn: '1d'}
  }) ],   
  controllers: [AuthController],
  providers: [AuthService]
})
export class AuthModule {}
