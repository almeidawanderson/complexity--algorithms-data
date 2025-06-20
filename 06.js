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

const cleanHouseReduce = data.reduce((acumulador, item) => {
  if (!acumulador[item.status]) {
    acumulador[item.status] = { local: item.local, filho: [], pai: [], esposa: [] };
  }

  if (item.status === 'filho') {
    acumulador[item.status].filho.push(item.nome);
  } else if (item.status === 'pai') {
    acumulador[item.status].pai.push(item.nome);
  } else if (item.status === 'esposa') {
    acumulador[item.status].esposa.push(item.nome);
  }

  return acumulador;
}, {})

console.log(cleanHouseReduce);

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

