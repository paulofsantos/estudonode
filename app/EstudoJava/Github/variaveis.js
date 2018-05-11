
    // strings -  Linhas Escritas - pode ser por aspas simples ou compostas
    'this is my string';
    'my second string';
    "my name is chris";
    // numbers
    10;
    500;
    3.14;
    // booleans (truthy / falsy) - Valida algo
    true;
    false;
    
    // specials
    undefined; //Quando a variavel não tem valor definido
    null; // Definir um valor nulo a uma variavel
    NaN; // Not a Number

    // objects - Sempre entre Chaves. POssui uma Key e um valo
    const user = {
      name: 'Chris',
      username: 'chrisoncode' 
    };


    // arrays - Sempre entre colchetes. Guarda diversos valores dentro dela. E de forma variada.
    const users = ['chris', 'nick', 'holly'];
    const luckyNumbers = [1, 43, 54, 132];
    const whatever = ['chris', 1, 'holly'];
    
    const superUsers = [ // pode guardar inclusive objetos que podem ter sua key referenciada
      { name: 'chris' },
      { name: 'nick' },
      { name: 'holly' }
    ];
    console.log(superUsers[2].name); // como neste exemplo


    // declaring variables
    var thing        = 'first'; // Não usado mais
    const otherThing = { // variaveis que não podem ter seu valor modificado
      name: 'chris'  
    };
    let newThing     = 'third'; // pode ter o seu valor modificado
    otherThing.name = 'holly';


    // ======================
    let myVariable; // let é bom pois vc pode deixar sem declarar valor.. e declarar somente depois mais pra frente no codigo
    myVariable = 'something';

