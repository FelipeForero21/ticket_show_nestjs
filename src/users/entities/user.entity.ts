import { Column, DeleteDateColumn, Entity } from "typeorm";

@Entity()
export class User {
    @Column({primary: true, generated: true})
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
}
