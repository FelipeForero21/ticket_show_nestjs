import {
  IsNumber,
  IsString,
} from 'class-validator';

export class CreateUsersDto {
  @IsString()
  email: string;
  @IsString()
  password: string;
  @IsString()
  username?: string;
  @IsNumber()
  rolId?: number;
}



