import { Module } from '@nestjs/common';
// import { UsersModule } from './users/users.module';
import { TypeOrmModule } from '@nestjs/typeorm';
// import { GendersModule } from './genders/genders.module';
import { UsersDbModule } from './users-db/users-db.module';
import { AuthModule } from './auth/auth.module';
import { ConfigModule } from '@nestjs/config';

@Module({
  imports: [
    ConfigModule.forRoot(),
    TypeOrmModule.forRoot({
      type:'postgres',
      host: 'localhost',
      port: 5432,
      username: 'user_crud',
      password: 'root',
      database: 'db_crud',
      autoLoadEntities: true,
      synchronize: true,
    }), UsersDbModule, AuthModule],
  controllers: [],
  providers: [],
})
export class AppModule {}
// UsersModule, GendersModule,
