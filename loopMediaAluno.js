let ligado = true;

while(ligado){
    const nome = prompt("Digite o nome do aluno");
    const nota1 = parseFloat(prompt(`Digite a primeira nota de ${nome}`));
    const nota2 = parseFloat(prompt(`Digite a segunda nota de ${nome}`));
    const nota3 = parseFloat(prompt(`Digite a terceira nota de ${nome}`));
    const nota4 = parseFloat(prompt(`Digite a quarta nota de ${nome}`));

    const media = (nota1+nota2+nota3+nota4) / 4;

    alert(`A média de ${nome} é igual a ${media.toFixed(2)}.`);
    const resposta = prompt("Digite 0 para sair do programa ou digite qualquer tecla para continuar.");
    if(resposta == 0){
        ligado = false;
    }
}

alert(`Programa encerrado.`);