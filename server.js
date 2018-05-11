// =======================
// get the packages we need ============
// =======================
const express = require('express'); //bibliotecas
const app = express();
const bodyParser = require('body-parser');
const morgan = require('morgan');
const mongoose = require('mongoose');

const jwt = require('jsonwebtoken');
const config = require('./config.js'); // informações de conecção com server
const User = require('./app/models/user'); //buscando schema modelo de  dados

// =======================
// configuration =========
// =======================
const port = process.env.Port || 8080; //setando rota 8080
mongoose.connect(config.database); //conectanco server!
app.set('superSecret', config.secret);//~~~~~~~~~~~~~~~~~~~~~~~~~~~~nao entendi

// use body parser so we can get info from POST and/or URL parameters
app.use(bodyParser.urlencoded({ extended:false }));//usando body-parse~~~~~~~~~~~~~~ n entendi
app.use(bodyParser.json());//retorna json

// use morgan to log requests to the console
app.use(morgan('dev'));//~~~~~~~~~~~~~~~~~~~~~~~~~~~~nao entendi

// =======================
// routes ================
// =======================

// basic route

app.get('/', function(req, res){
    res.send('Hello! The API is at http://localhost:'+ port + '/api');//criando rota basica 
});

// create a sample user
app.get('/setup', function(req, res){//criando nova rota para salver user

const nick = new User({           //definindo dados de usuario novo no schema user
    name: 'Nick Cerminara',
    password: 'password',
    admin: true
});

nick.save(function(err){
    if (err) throw err; //throw joga erro no console

console.log('User save successfully');
res.json({ success: true});

  });
});

// API ROUTES -------------------

// get an instance of the router for api routes

const apiRoutes = express.Router(); //~~~~~~~~~~~~~~~~~~comando da express?

//NOVO USUARIO
apiRoutes.post('/novousuario', function(req, res){    
    User.findOne({
                    name: req.body.name, 
                    password: req.body.password 
                }, 
                function(err, user){
        if (err) 
        res.json(err);

        if (user){
            res.json({message: 'Usuario existente.'});
        } else {
            const novoUser = new User({
                name: req.body.name,
                password: req.body.password,
                admin: req.body.admin
            });

            novoUser.save(function(err){
                if(err)
                    res.json(err);

                res.json({message: 'Usuario novo criado', user: novoUser});
                
            });
        };
    });   
    
});

    apiRoutes.post('/login', function(req, res){
        User.findOne({
            name: req.body.name,
            password: req.body.password

        }, function(err, user){
            if (err)
            res.json(err);
            if (!user){
                res.json({message:'Usuario não encontrado.'});

            } else {
                const info = {
                    name: user.name
                };

                const token1 = jwt.sign (info, app.get('superSecret'), {
                    expiresIn:1440
                });

                res.json({
                    success: true,
                    message:'Seu acesso esta liberado SR '+user.name,
                    token: token1
                });
            };
        });
    });

// TODO: route to authenticate a user (POST http://localhost:8080/api/authenticate)

apiRoutes.post('/authenticate', function(req, res){ // criando rota para postar autenticação
    ////achando o usuario
    User.findOne({
        name: req.body.name
    }, function(err, user){

        if (err) throw err;

        if (!user){ //mensange para comparação onde o usuario é diferente
            res.json({success: false, message:'Authentication failed. User not found.'}); ///~~~success é uma funcção?
    } else if (user) { 

        if (user.password != req.body.password){ //comparando passowrd e mostrando mensagem password diferente
            res.json({ success:false, message:'Authentication failed. Wrong Password.'});
        } else {
         // if user is found and password is right
        // create a token with only our given payload
    // we don't want to pass in the entire user since that has the password
    const payload = {
        admin: user.admin//~~~~~~~~~~~~~~~~~~~~~~~~nao entendi o pq isso importa
    };
        const token = jwt.sign(payload, app.get('superSecret'), {  //~~~~~ nao entendi direito como ele gera o token
            expiresIn: 1440 //24 horas  
        });

        res.json({                         //mensagem com o token de autenticação
            success: true,
            message: 'Enjoy your token',
            token: token
        });
    }   

  }

});
});

// TODO: route middleware to verify a token

apiRoutes.use(function(req, res, next){
// check header or url parameters or post parameters for token
    const token = req.body.token || req.query.token || req.headers['x-access-token'];

    if (token){
        // verifies secret and checks exp
        jwt.verify(token, app.get('superSecret'), function(err, decoded){
            if (err){
                return res.json ({ success: false, message: 'Failed to athenticate token.'});
            } else {
                // if everything is good, save to request for use in other routes
                req.decoded = decoded;
                next();

            }
        });
    } else {//caso não apresente token, retoran erro 403
        // if there is no token
        // return an error
        return res.status(403).send({
            success: false,
            message: 'No token provided.'
        });
    }


});   

  // route to return all users (GET http://localhost:8080/api/users)
apiRoutes.get('/users', function(req, res){//criando em /users uma função para buscar e mostar users
    User.find({}, function(err, users){
       res.json(users);
    });
 });

// route to show a random message (GET http://localhost:8080/api/)

apiRoutes.get('/', function(req, res){//~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~não entendi o pq '/'
    res.json({message: 'Welcome to the coolest API on earth!'});
});



// apply the routes to our application with the prefix /api
app.use('/api', apiRoutes);//~~~~~~~~~~~~~~~~~~~~~~~~~~~~~para que server o comando use?


// =======================
// start the server ======
// =======================

app.listen(port);
console.log('Magic Happens at http://localhost:'+ port);
console.log('Test');