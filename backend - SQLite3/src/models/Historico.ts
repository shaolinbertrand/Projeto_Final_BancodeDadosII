import {Entity, Column, PrimaryGeneratedColumn, ManyToOne, JoinColumn} from 'typeorm';
import User from './User'

@Entity('historico')
export default class Historico{
    @PrimaryGeneratedColumn('increment')
    id: number;

    @Column()
    jogo: string;


    @ManyToOne(() => User, user => user.historico)
    @JoinColumn({name:'user_id'})
    user: User;
}