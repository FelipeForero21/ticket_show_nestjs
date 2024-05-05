import { Column, DeleteDateColumn, Entity, ManyToOne } from "typeorm";
import { Rol } from "./rol.entity"



@Entity({ name: 'users' })
export class User {
    @Column({ primary: true, generated: true })
    id: number;

    @Column()
    name: string;

    @Column()
    identificationNumber: string;

    @Column()
    email: string;

    @Column()
    password: string;

    @Column()
    gender: string;

    @DeleteDateColumn()
    deletedAt: Date;

    @Column()
    rolId: number;

    @ManyToOne(() => Rol, rol => rol.users)
    rol: Rol;
}


