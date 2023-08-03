const nomeUsuario = prompt("Por favor, insira seu nome, caro usuário:");

alert(`Seja bem-vindo, ${nomeUsuario}.`);

const pedido = parseInt(prompt(`Selecione um lanche: lanche1 = R$1, lanche2 = R$2, lanche3 = R$3, lanche4 = R$4, lanche5 = R$5, lanche6 = R$6,`));

switch(pedido){
    case  1:
        alert(`Você escolheu o pedido de lanche 1. Custando R$1`);
        break;
    case 2:
        alert(`Você escolheu o pedido de lanche 2. Custando R$2`);
        break;
    case 3:
        alert(`Você escolheu o pedido de lanche 3. Custando R$3`);
        break;
    case 4:
        alert(`Você escolheu o pedido de lanche 4. Custando R$4`);
        break;
    case 5:
        alert(`Você escolheu o pedido de lanche 5. Custando R$5`);
        break;
    case 6:
        alert(`Você escolheu o pedido de lanche 6. Custando R$6`);
        break;
    default:
        alert(`Programa será fechado. Por favor, insira um número entre 1 e 6.`)
}

alert(`Programa encerrado.`)