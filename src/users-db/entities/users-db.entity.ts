import { Column, DeleteDateColumn, Entity, PrimaryGeneratedColumn } from "typeorm";


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

    @Column({default: 'user'})
    rol: string;

    @DeleteDateColumn()
    deleteAt: Date;




}
