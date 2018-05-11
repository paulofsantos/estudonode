// get an instance of mongoose and mongoose.Schema
const mongoose = require('mongoose'); //chamando bbteca
const Schema = mongoose.Schema; //criando um schema(table)


// set up a mongoose model and pass it using module.exports

module.exports = mongoose.model('User', new Schema({   //definindo parametros desse schema
    name: String,
    password: String,
    admin: Boolean
}));