const numeros = [0,2,4,6,8,10]

const total = numeros.reduce((acumulador, numeroAtual) => {
      return acumulador + numeroAtual
}, 0)

console.log(total)