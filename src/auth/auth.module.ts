import { Module } from '@nestjs/common';
import { AuthController } from './auth.controller';
import { UsersDbModule } from 'src/users-db/users-db.module';
import { AuthService } from './auth.service';
import { JwtModule } from '@nestjs/jwt';
@Module({ 
  imports: [ UsersDbModule,
  JwtModule.register({
    global: true,
     signOptions: {expiresIn: '60s'}
  }) ],   
  controllers: [AuthController],
  providers: [AuthService]
})
export class AuthModule {}
