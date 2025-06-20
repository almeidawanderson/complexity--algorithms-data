const pessoas = [ 
  {  nome: 'João', idade: 25, },
  {  nome: 'Maria', idade: 28, },
  {  nome: 'Wanderson', idade: 30, },
  {  nome: 'Ana', idade: 25, },
  {  nome: 'Carlos', idade: 30, },
  {  nome: 'Fernanda', idade: 28, },
  {  nome: 'Roberto', idade: 30, },
  {  nome: 'Patrícia', idade: 25, },
  {  nome: 'Lucas', idade: 28, },
  {  nome: 'Juliana', idade: 30, },
]

const pessoasPorIdade =  pessoas.reduce((pessoasIdade, pessoaAtual) => {
  // Verifica se a idade já existe no acumulador
    if(pessoasIdade[pessoaAtual.idade]){
    // Se existir, adiciona o nome da pessoa atual ao array correspondente
        pessoasIdade[pessoaAtual.idade].push(pessoaAtual.nome);
    } else {
    // Se não existir, cria um novo array com o nome da pessoa atual
      pessoasIdade[pessoaAtual.idade] = []
      pessoasIdade[pessoaAtual.idade].push(pessoaAtual.nome);
    }
    return pessoasIdade;
}, {});

console.log(pessoasPorIdade);