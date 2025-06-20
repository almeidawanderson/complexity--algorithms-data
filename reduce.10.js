const users = [
  { id: 1, name: "Alice", active: 'ativo' },
  { id: 2, name: "Bob", active: 'inativo' },
  { id: 3, name: "Carol", active: 'ativo' },
  { id: 4, name: "David", active: 'inativo' },
  { id: 5, name: "Eve", active: 'ativo' }
];

const activeUsers = users.reduce((acumulador, user) => {
  if(acumulador[user.active]){
    acumulador[user.active].push(user.name);
  } else {
    acumulador[user.active] = [];
    acumulador[user.active].push(user.name);
  }
  return acumulador;

}, {});

console.log(activeUsers);

// validar quantos ativos e inativos:

const activeCount = users.reduce((count, user) => {
  if (user.active === 'ativo') {
    count.ativos += 1;
  } else {
    count.inativos += 1;
  }
  return count;
}, { ativos: 0, inativos: 0 });

console.log(activeCount);