import { IsString, MinLength } from "class-validator";

export class CreateGenderDto {

    @IsString()
    @MinLength(3)
    gender: string;
}
