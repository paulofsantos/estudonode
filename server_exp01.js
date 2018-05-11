
// BASE SETUP
// =============================================================================

const Bear = require('./app/models/bear'); //nomeando variavel bear ao arquivo bear.js

const mongoose = require('mongoose'); //chamando bb mongoose
mongoose.connect('mongodb://node:node@localhost:27017/Iganiq8o'); // nao entendi


const express = require ('express'); //variavel para chamar a biblioteca expres -> var express
const app = express(); //definir aplicação a usar express
const bodyParser = require ('body-parser');

app.use(bodyParser.urlencoded({extended: true})); // Para fazer app usar bb body parser
app.use(bodyParser.json()); //na formatação json

const port = process.env.PORT || 8000; // definindo que usaremos porta 8000 




// ROUTES FOR OUR API
// =============================================================================

const router = express.Router(); // utilizaremos express para fazer os caminhos da app

router.use(function(req, res, next) {
    console.log('Someting is happening');    //se receber ação mostrará log e continuará
    next();
});

router.get('/', function(req, res) {
    res.json({message: 'hooray! welcome to our api!'}) // mensagem para confirmar rota no host
})

// more routes for our API will happen here

// on routes that end in /bears
// ----------------------------------------------------
router.route('/bears')
    .post(function(req, res){
        const bear = new Bear();
        bear.name = req.body.name;
        
        bear.save(function(err){
            if (err)
                res.send(err);

            res.json({message:'Bear created!'});    
        });
    
    })
    .get(function(req, res){
        Bear.find(function(err, bears){
            if (err)
                res.send(err);
            res.json(bears);    
        });
    });

// on routes that end in /bears/:bear_id
router.route('/bears/:bear_id')
    .get(function(req, res){
        Bear.findById(req.params.bear_id, function(err, bear){
            if (err)
                res.send(err);
            res.json(bear);    
        });
    })
    .put(function(req, res){
        Bear.findById(req.params.bear_id, function(err, bear){
            if(err)
            res.send(err);
        bear.name = req.body.name;
        
        bear.save(function(err){
            if (err)
            res.send(err);

            res.json({message: "Bear Updated!"})
        });
        });
    })
    .delete(function(req, res){
        Bear.remove({
            _id: req.params.bear_id
        
        }, function(err, bear){
            if (err)
            res.send(err);

            res.json({message: "Deletado com sucesso"});
        });
    });

// REGISTER OUR ROUTES -------------------------------

app.use('/api', router); // Fala que router acontece apos nota rota /api





// START THE SERVER
// =============================================================================
 
app.listen(port); // manda app rodar na port
console.log(`Magic Happens on port ${port}`);//mostra no log






