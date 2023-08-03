const valorTotal = parseFloat(prompt(`Digite o valor total da compra a ser parcelado:`));
const parcelas = parseFloat(prompt(`Digite a quantidade de parcelas`));

const valorParcelado = valorTotal / parcelas;

alert(`O valor de R$${valorTotal} foi dividido em ${parcelas}x sem juros. Valor de cada parcela = R$${valorParcelado.toFixed(2)}`);
alert(`Programa encerrado`);