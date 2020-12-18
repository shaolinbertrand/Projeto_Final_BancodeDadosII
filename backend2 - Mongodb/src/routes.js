const express = require('express');
const routes = express.Router();
const upload = require('./config/multer');

const JogosController = require ('./controllers/JogosController');
routes.get("/jogos", JogosController.index);
routes.get("/jogo/:id", JogosController.show);
routes.post("/cadastro", upload.single('foto'), JogosController.store);
routes.put("/jogo/:id",JogosController.update);
routes.delete("/jogo/:id",JogosController.destroy);

module.exports = routes;