    
    //Let pode ter seu valor mudado, Const não.
    let a   = 10;
    let b   = 3;
    let c   = 15;
    const d = '5';
    let e   = 'my name';
    const f = 'is chris';
    //console.group('Addition'); POdemos somar variaveis de numeros com strings
      console.log(a + b); // 13
      console.log(a + d); // 105
      console.log(e + ' ' + f);
      console.log(e + ' is the batman');
   
   // console.group('Multiplication');
      console.log(a * 3); // 30
      console.log(a * b); // 30
      console.log(b * c); // 45
   
  
      a++;
      b--;
      --b;
      c += a;
      //console.group('Incrementing'); Incrementando valor as variaveis.. 
        console.log(a + 1); //   
        console.log(a++);
        console.log(c += a); 
        console.log(e += f); // E passa a assumir o valor dele + f

        console.log(e); // Valor somado

       

    
