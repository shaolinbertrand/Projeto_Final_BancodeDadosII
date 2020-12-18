import {Request,Response} from 'express';
import {getRepository} from 'typeorm';
import User from '../models/User';

export default{
    async index(req: Request, res: Response){
        const usersRepository = getRepository(User);

        const users = await usersRepository.find();

        return res.json(users);
    },

    async show(req: Request, res:Response){
        const {id} = req.params;

        const usersRepository = getRepository(User);

        const user = await usersRepository.findOneOrFail(id);

        return res.json(user);
    },

    async create(req: Request,res:Response){
        const {
            name,
            usuario,
            senha,
            birthday
        } = req.body;
        
        const usersRepository = getRepository(User);
    
        const user = usersRepository.create({
            name,
            usuario,
            senha,
            birthday
        });
    
        await usersRepository.save(user);
    
        return res.status(201).json(user);
    },

        async login(req: Request,res: Response){
        const nome = req.query.usuario;//usuario
        const senha2 = req.query.senha;//senha
        const usersRepository = getRepository(User);
        try {var user = await usersRepository.findOneOrFail({"usuario":nome,"senha":senha2});
        console.log(nome)
        console.log(senha2)
        console.log(user)
        return res.json(user);} catch(e){return res.status(404).json([{msg:"usuario não encontrado"}])}
           
        
    },

    
};