const mongoose = require ('mongoose');
const Jogo = mongoose.model('Jogo');


module.exports ={
    async index(req,res){
        const {page = 1} = req.query;
        const jogos = await Jogo.find(/*{}, {page,limit:10}*/);

        return res.json(jogos);
    },

    async show(req,res){
        const jogo = await Jogo.findById(req.params.id);
        
        return res.json(jogo); 
    },

    async store(req,res){
        const jogo = await Jogo.create({
            name: req.body.name,
            categoria: req.body.categoria,
            classificacao: req.body.classificacao,
            foto: req.file.path});
        return res.json(jogo)
    },

    async update(req,res){
        const jogo = await Jogo.findByIdAndUpdate(req.params.id, req.body, {new: true});
    
        return res.json(jogo);
    },

    async destroy(req,res){
        await Jogo.findByIdAndRemove(req.params.id);

        return res.send();
    }
}
