import { Column, Entity, OneToMany, PrimaryGeneratedColumn } from "typeorm";
import { UsersDb } from "./users-db.entity"


@Entity()
export class Rol {
    @PrimaryGeneratedColumn()
    id: number;

    @Column()
    username: string;

    @OneToMany(() => UsersDb, user => user.rol)
    users: UsersDb[];
}