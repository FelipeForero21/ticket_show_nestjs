import { Rol } from "./rol.entity";
export declare class User {
    id: number;
    name: string;
    identificationNumber: string;
    email: string;
    password: string;
    gender: string;
    deletedAt: Date;
    rolId: number;
    rol: Rol;
}
