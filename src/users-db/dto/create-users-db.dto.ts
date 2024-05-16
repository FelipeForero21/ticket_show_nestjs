import {
  IsNumber,
    IsString,
  } from 'class-validator';

export class CreateUsersDbDto {
    @IsString()
    email: string;
    @IsString()
    password: string;
    @IsString()
    username?: string;
    @IsNumber()
    rolId?: number;
}



