import { Column, DeleteDateColumn, Entity, PrimaryGeneratedColumn, ManyToOne } from "typeorm";
import { Rol } from "./rol.entity"


@Entity()
export class UsersDb {
    @PrimaryGeneratedColumn()
    id: number;

    @Column()
    name: string;

    @Column({ unique: true, nullable: false })
    email: string;

    @Column({ nullable: false, select: false })
    password: string;

    @DeleteDateColumn()
    deleteAt: Date;

    @ManyToOne(() => Rol, rol => rol.users)
    rol: Rol;

    @Column({ default: 2 })
    rolId: number;
}
