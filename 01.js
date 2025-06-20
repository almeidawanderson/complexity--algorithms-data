const alunos = [
  { nome: "Ana", media: 8.5, rendaFamiliar: 1200 },
  { nome: "Carlos", media: 6.0, rendaFamiliar: 900 },
  { nome: "Bianca", media: 7.8, rendaFamiliar: 1800 },
  { nome: "Daniel", media: 9.0, rendaFamiliar: 700 },
  { nome: "Elisa", media: 5.5, rendaFamiliar: 1500 },
];

const allowed = alunos.filter((aluno) => {
  if(aluno.media >= 7.00 && aluno.rendaFamiliar <= 1500) {
    console.log(`O aluno foi aprovado e tem direito à bolsa: ${aluno.nome}`);
  } else {
    aluno.media >= 7.00 && aluno.rendaFamiliar > 1500
     console.log(`O aluno foi aprovado, mas não tem direito à bolsa: ${aluno.nome}`)
  }

})


