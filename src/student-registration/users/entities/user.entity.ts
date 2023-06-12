import { Column, Entity, PrimaryGeneratedColumn } from "typeorm";
@Entity()
export class User {
    @PrimaryGeneratedColumn()
    id: number;

    @Column()
    firstName: string;
    
    @Column({nullable: true})
    middleName: string;

    @Column()
    lastName: string;

    @Column()
    email: string;

    @Column({nullable: true})  /*nullable: true simply means the field can't be empty*/ 
    dateOfBirth: Date;
    
    @Column({nullable: true})
    nationality: string

    @Column({nullable: true})
    address: string

    @Column({ default: true })  /*default: true puts a default value*/
    isActive: boolean;
    student: any;
}
