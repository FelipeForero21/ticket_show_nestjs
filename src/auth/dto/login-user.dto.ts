import { IsEmail, IsString, IsNotEmpty } from 'class-validator'

export class loginDto {
    @IsNotEmpty()
    @IsEmail()
    email: string

    @IsNotEmpty()
    @IsString()
    password: string
}
