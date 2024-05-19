import { ApiProperty } from "@nestjs/swagger";
import { Transform } from "class-transformer";
import { IsEmail, IsString, MinLength } from "class-validator";

export class RegisterDto {

    @Transform(({ value }) => value.trim())
    @IsString()
    @MinLength(1)
    @ApiProperty()
    username: string;

    @IsEmail()
    @ApiProperty()
    email: string;

    @Transform(({ value }) => value.trim())
    @IsString()
    @MinLength(8)
    @ApiProperty()
    password: string;

}