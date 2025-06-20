const alunos = [
  { nome: "Lucas", media: 8.5, faltas: 2 },
  { nome: "Bruna", media: 7.5, faltas: 0 },
  { nome: "Paulo", media: 7.2, faltas: 5 },
  { nome: "Juliana", media: 9.0, faltas: 1 },
];

const filteredStudents = alunos.filter(aluno => aluno.media >= 7.00 && aluno.faltas <= 3)
  .map(aluno => {
    let situacao;

    if(aluno.faltas == 0){
      return {
        nome: aluno.nome,
        media: aluno.media,
        situacao: "Aprovado com bônus"
      }
    } else if(aluno.faltas > 0) {
      return {
        nome: aluno.nome,
        media: aluno.media,
        situacao: "Aprovado"
      }
    }
  })

  console.log("Alunos aprovados:", filteredStudents);