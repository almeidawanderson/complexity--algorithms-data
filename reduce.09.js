const numeros = [-1,2,-5, 4, 5]

const resultado = numeros.reduce((acumulador, numero) => {
    if(numero > 0) {
      acumulador.push(numero * 2);
    }
    return acumulador;
},[]);

// console.log(resultado); 

const resultado2 = numeros.filter(numero => numero > 0).map(numero => numero * 2);
console.log(resultado2);