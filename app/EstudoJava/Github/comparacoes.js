

//Strings

const original = 'chris';
    const clone    = 'CHRIS';
    
      console.log(original == 'chris'); // true
      console.log(original == clone); // false - Js é case sensitive
      console.log(original == clone.toLowerCase()); // true - tolowercase = funçao para deixar letras minusculas
// Numeros   
    const num1 = 10;
    const num2 = '10';
    
      console.log(num1 == num2); // true  - == permite que o js possa coagir e alterar o tipo da variavel param que possam ser iguais
      console.log(num1 === num2); // false - === não permite coarção
      console.log(num1 != num2); // false - != diferente. Permite coarção
      console.log(num1 !== num2); // true - !== diferente sem coarção
    
//Booleans    
      let what; // undefined
    let thing = null; 
 
      console.log(Boolean(what)); // false - Sem valor
      console.log(Boolean(thing)); // false - Valor nulo
      console.log(Boolean(num1)); // true - Possui valor
      console.log(Boolean(num2)); // true
      console.log(Boolean({})); // true - Objetos e arrays são considerados valor. Sempre sera true
      console.log(Boolean([])); // true

//objetos e arrays      
    const firstArr  = [1, 2, 3];
    const secondArr = [1, 2, 3];
    const firstObj  = { color: 'red' };
    const secondObj = { color: 'red' };
    
      console.log(firstArr === secondArr);// sempre falso.. a não ser que compare alguma informação especifica dentro do objeto ou array.
      console.log(firstObj === secondObj);

//And(&&) Or(||)      

   
      console.log(Boolean('blah') && Boolean('thing')); // true - A comparação inteira tem que ser true para && ser true
      console.log(Boolean('blah') && Boolean('')); // false - Um dos dois é falso.. por isso falso
      console.log(Boolean('blah') || Boolean('')); // true - Um tem que ser diferente do outro para ser verdadeiro
      console.log(Boolean('') || Boolean('')); // false - iguais.. || é falso
   