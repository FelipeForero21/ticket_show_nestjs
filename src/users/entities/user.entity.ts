import { Gender } from "src/genders/entities/gender.entity";
import { Column, DeleteDateColumn, Entity, ManyToOne } from "typeorm";

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

    @DeleteDateColumn()
    deletedAt: Date;

    @ManyToOne(() => Gender, (gender) => gender.id, {
        eager: true
    })
    gender: Gender;
    
}
