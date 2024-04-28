import { IsEmail, IsNotEmpty, IsOptional, IsString, MaxLength, MinLength } from 'class-validator';

export class CreateUserDto {
    @IsString()
    @IsNotEmpty()
    @MinLength(3)
    name: string;
    
    @IsNotEmpty()
    @IsString()
    identificationNumber: string;

    @IsString()
    @IsEmail()
    @IsNotEmpty()
    email: string;
    
    @IsString()
    @MinLength(6)
    @MaxLength(20)
    password: string;
    
    @IsString()
    @IsOptional()
    gender?: string;
}
