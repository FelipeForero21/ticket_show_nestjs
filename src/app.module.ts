import { Module } from '@nestjs/common';
// import { UsersModule } from './users/users.module';
import { TypeOrmModule } from '@nestjs/typeorm';
// import { GendersModule } from './genders/genders.module';
import { UsersDbModule } from './users-db/users-db.module';
import { AuthModule } from './auth/auth.module';

@Module({
  imports: [
    TypeOrmModule.forRoot({
      type:'mysql',
      host: 'localhost',
      port: 3307,
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
