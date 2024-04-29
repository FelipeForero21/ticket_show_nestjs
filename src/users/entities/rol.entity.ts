import { Column, DeleteDateColumn, Entity, OneToMany } from "typeorm";
import { User } from "./user.entity";

@Entity()
export class Rol {
    @Column({primary: true, generated: true})
    id: number;

    @Column()
    name: string;

    @DeleteDateColumn()
    deletedAt: Date;

    @OneToMany(()=> User,user => user.rolId)
    users:User[];
}
