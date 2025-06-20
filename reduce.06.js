const itens = [{
  description: 'Lápis', quantity: 10, price: 1.5,
  description: 'Caneta', quantity: 5, price: 2.0,
  description: 'Caderno', quantity: 2, price: 15.0,
  description: 'Borracha', quantity: 8, price: 0.5,
  description: 'Apontador', quantity: 3, price: 1.0
}]
// o meu item atual é um objeto que tem as propriedades description, quantity e price
// como eu quero saber o valor total de todos os itens, eu preciso multiplicar a quantidade pelo preço
const totalValue = itens.reduce((acumulador, itemAtual) => {
  return acumulador + (itemAtual.quantity * itemAtual.price)
}, 0) 

console.log(totalValue)