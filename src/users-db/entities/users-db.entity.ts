import { Column, DeleteDateColumn, Entity, PrimaryGeneratedColumn } from "typeorm";


@Entity()
export class UsersDb {

    @PrimaryGeneratedColumn()
    id: number;


    @Column({nullable: false})
    name: string;

    @Column({unique: true})
    email: string;

    @Column({nullable: false})
    password: string;

    @Column({default: 'user'})
    rol: string;

    @DeleteDateColumn()
    deleteAt: Date;




}
