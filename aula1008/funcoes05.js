function calcularIMC(peso, altura) {
    return peso / (altura * altura);
}

const valorPeso = parseFloat(prompt("Digite o valor do seu peso:"));
const valorAltura = parseFloat(prompt("Digite o valor da sua altura em metros:"));

alert(calcularIMC(valorPeso, valorAltura).toFixed(2));