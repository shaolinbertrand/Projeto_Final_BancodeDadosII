const mongoose = require ('mongoose');
const mongoosePaginate = require('mongoose-paginate');

const JogoSchema = new mongoose.Schema({
    name: {
        type: String,
        require: true,
    },
    categoria: {
        type: Array,
        require: true,
    },
    classificacao: {
        type: Number,
        require: true,
    },
    foto:{
        type: String,
        require: true
    }
});

JogoSchema.plugin(mongoosePaginate);

mongoose.model('Jogo', JogoSchema);