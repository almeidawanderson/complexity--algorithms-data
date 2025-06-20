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
  {id: 1, nome: 'teclado', preco: 15000},
  {id: 2, nome: 'mouse', preco: 7550},
  {id: 3, nome: 'mouse', preco: 7550},
  {id: 4, nome: 'mouse', preco: 7550},
]

// 15000 -> 150.00
const produtosFormatados = produtos.map((produto) => {
  return {
    nome: produto.nome,
    preco: (produto.preco / 100).toFixed(2)
  }
})

//console.log(produtosFormatados)

const funcionarios = [
  {nome: 'João', salario: 3000},
  {nome: 'Maria', salario: 4000},
  {nome: 'Pedro', salario: 5000},
  {nome: 'Ana', salario: 6000}
]

const aumentoFuncionario = funcionarios.map((funcionario) => {
  const aplicarAumento = funcionario.salario * 0.1
  return {
    ...funcionario,
    salario: funcionario.salario + aplicarAumento
  }
})

console.log(aumentoFuncionario)