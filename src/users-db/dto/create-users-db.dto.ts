import {
    IsString,
  } from 'class-validator';

export class CreateUsersDbDto {
    @IsString()
    email: string;
    @IsString()
    password: string;
    @IsString()
    name?: string;
}