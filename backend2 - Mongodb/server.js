const mongoose = require('mongoose');
const cors = require('cors');
const express = require('express');
const requireDir = require("require-dir");
const path = require('path')

//iniciando o App
const app = express();
app.use(express.json());
app.use(cors());
app.use('/uploads', express.static(path.join(__dirname,'src','upload')))

// Iniciando o DB
mongoose.connect('mongodb://localhost:27017/jogos',
 {useNewUrlParser: true,useUnifiedTopology: true}
 );
 requireDir("./src/models");


//primeira rota
app.use('/api',require("./src/routes"));


app.listen(3001);
