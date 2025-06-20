const data = [
  { nome: 'Controle do videogame', local: 'sala', status: 'filho' },
  { nome: 'Brinquedo de montar', local: 'quarto', status: 'filho' },
  { nome: 'Notebook', local: 'escritório', status: 'pai' },
  { nome: 'Carregador de celular', local: 'cozinha', status: 'esposa' },
  { nome: 'Bíblia', local: 'sala', status: 'pai' },
  { nome: 'Livro de receitas', local: 'cozinha', status: 'esposa' },
  { nome: 'Boneca', local: 'quarto', status: 'filho' },
  { nome: 'Escova de cabelo', local: 'banheiro', status: 'esposa' },
  { nome: 'Chave do carro', local: 'entrada', status: 'pai' },
];

const cleanHouse = data.map((item) => {
  let item_filho = [];
  let item_pai = [];
  let item_esposa = [];


  if (item.status === 'filho') {
    item_filho.push(item.nome);
  } else if (item.status === 'pai') {
    item_pai.push(item.nome);
  } else if (item.status === 'esposa') {
    item_esposa.push(item.nome);
  }
  return {
    local: item.local,
    filho: item_filho,
    pai: item_pai,
    esposa: item_esposa
  };
});

console.log(cleanHouse);
