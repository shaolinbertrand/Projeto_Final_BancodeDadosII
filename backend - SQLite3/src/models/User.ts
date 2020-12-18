import {Entity, Column, PrimaryGeneratedColumn, OneToMany, JoinColumn} from 'typeorm';
import Historico from './Historico'

@Entity('users')
export default class User{
    @PrimaryGeneratedColumn('increment')
    id: number;

    @Column()
    name: string;

    @Column()
    usuario: string;

    @Column()
    senha: string;

    @Column()
    birthday: Date;

    @OneToMany(() => Historico, historico => historico.user, {
        cascade: ['insert', 'update']
    })
    @JoinColumn({name: 'user_id'})
    historico: Historico[];
}