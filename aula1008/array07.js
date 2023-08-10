const medias = [7, 6, 3, 10, 5, 9, 7.8, 9.2, 4.7, 7.3];

let somaNotasTurma = 0;
let aprovados = 0;
let reprovados = 0;

for (let i = 0; i < medias.length; i++) {
    somaNotasTurma += medias[i];
    if (medias[i] >= 7) {
        aprovados++;
    } else {
        reprovados++;
    }
}

const mediaTurma = somaNotasTurma / medias.length;

alert(`A média geral da turma: ${mediaTurma} e a quantidade de alunos aprovados: ${aprovados}. A quantidade de alunos reprovados: ${reprovados}`);