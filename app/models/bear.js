const mongoose = require('mongoose'); //declara mongoose - puxa bb
const Schema = mongoose.Schema; // Variavel Schema chama lista de objetos dentro de mongoose

const BearSchema = new Schema({ // cria uma copia de schema dentro do mongoose. 

    name: String
});

module.exports = mongoose.model ('Bear', BearSchema); // exportando para a biblioteca mangoose
