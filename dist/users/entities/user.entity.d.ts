import { Gender } from "src/genders/entities/gender.entity";
export declare class User {
    id: number;
    name: string;
    identificationNumber: string;
    email: string;
    password: string;
    deletedAt: Date;
    gender: Gender;
}
