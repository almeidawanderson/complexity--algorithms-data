const usuarios = [
  {id: 1, nome: 'Ana', sobreNome: 'Silva', idade: 30, cidade: 'São Paulo'},
  {id: 2, nome: 'Maria', sobreNome: 'Oliveira', idade: 25, cidade: 'Rio de Janeiro'},
  {id: 3, nome: 'João', sobreNome: 'Souza', idade: 28, cidade: 'Belo Horizonte'},
  {id: 4, nome: 'Ana', sobreNome: 'Costa', idade: 22, cidade: 'Curitiba'},
  {id: 5, nome: 'Pedro', sobreNome: 'Lima', idade: 35, cidade: 'Fortaleza'  }
]

const r = usuarios.map((user) => {
     return `${user.nome} ${user.sobreNome}`;
})

// console.log(r)

const produtos = [
  {nome: 'teclado', preco: 15000},
  {nome: 'mouse', preco: 7550},
  {nome: 'mouse', preco: 7550},
  {nome: 'mouse', preco: 7550},
]

// 15000 -> 150.00
const produtosFormatados = produtos.map((produto) => {
  return {
    nome: produto.nome,
    preco: (produto.preco / 100).toFixed(2)
  }
})

console.log(produtosFormatados)