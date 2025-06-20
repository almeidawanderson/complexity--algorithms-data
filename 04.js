const funcionarios = [
  { nome: "Carlos", cargo: "Analista", anosEmpresa: 5 },
  { nome: "Fernanda", cargo: "Júnior", anosEmpresa: 2 },
  { nome: "Marcos", cargo: "Pleno", anosEmpresa: 3 },
  { nome: "Jéssica", cargo: "Júnior", anosEmpresa: 4 },
];

const employeesWithBonus = funcionarios
      .filter(funcionario => funcionario.anosEmpresa >= 2 && funcionario.cargo === "Júnior")
      .map(funcionario => {
        return {
          nome: funcionario.nome,
          cargo: funcionario.cargo,
          bonus: "Elegível para promoção"
        }
      })

console.log(employeesWithBonus)