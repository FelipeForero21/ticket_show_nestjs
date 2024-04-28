import { Column, DeleteDateColumn, Entity } from "typeorm";

@Entity()
export class User {
    @Column({primary: true, generated: true})
    id: number;

    @Column()
    email: string;

    @Column()
    name: string;

    @Column()
    password: string;

    @DeleteDateColumn()
    deletedAt: Date;
}
