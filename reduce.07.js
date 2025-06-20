const names = ["Daniel", "John", "Mary", "Jane", "Paul", "Anna", "Diego", "João", "Paula", "Maria"];

const nameCount = names.reduce((acumulador, nomeAtual) => {
  // Converte o nome atual para minúsculas e pega a primeira letra
  const firstLetter =  nomeAtual[0].toLowerCase();
  // Verifica se a primeira letra já existe no acumulador
  if(acumulador[firstLetter]){
    acumulador[firstLetter]++;
  // Se existir, incrementa o contador
  } else {
    // Se não existir, inicializa o contador com 1
    acumulador[firstLetter] = 1;
  }
  return acumulador;
}, {});

console.log(nameCount);

