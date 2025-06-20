const alunos = [
  { nome: "Ana", media: 8.5, rendaFamiliar: 1200 },
  { nome: "Carlos", media: 6.0, rendaFamiliar: 900 },
  { nome: "Bianca", media: 7.8, rendaFamiliar: 1800 },
  { nome: "Daniel", media: 9.0, rendaFamiliar: 700 },
  { nome: "Elisa", media: 5.5, rendaFamiliar: 1500 },
];

const allowedWithBolsa = alunos
      .filter(aluno => aluno.media >= 7.00)
      .map(aluno => {
        let bolsa;

        if(aluno.rendaFamiliar <= 1500){
          bolsa = "Com direito a bolsa"
        } else {
          bolsa = "Sem direito a bolsa"
        }

        return {
          nome: aluno.nome,
          media: "Aprovado  ",
          bolsa: bolsa
        }
      })

console.log("Alunos aprovados:", allowedWithBolsa);
