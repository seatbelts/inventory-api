import { Entity, Column, PrimaryGeneratedColumn } from 'typeorm';

@Entity()
export class Item {

    @PrimaryGeneratedColumn()
    id: number;

    @Column()
    name: string;

    @Column('text')
    description: string;

    @Column('double')
    price: number;

    @Column('int')
    discount: number;

}
