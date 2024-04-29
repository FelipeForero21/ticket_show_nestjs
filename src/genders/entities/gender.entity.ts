import { User } from "src/users/entities/user.entity";
import { Column, Entity, OneToMany } from "typeorm";

@Entity()
export class Gender {

    @Column({primary: true, generated: true})
    id: number;

    @Column()
    gender: string;
    
    @OneToMany(() => User, (user) => user.gender)
    users: User[];
}
