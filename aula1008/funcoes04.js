function potencia(num, expoente) {
    if (expoente === 0) {
        return num = 1;
    }
    expoente--;
    return num * potencia(num, expoente);
}

// 2^0 = 1
// 2^1 = 2 * 2^0 = 2
// 2^2 = 2 * 2^1 = 4
// 2^3 = 2 * 2^2 = 8
// 2^4 = 2 * 2^3 = 16

const valorBase = parseFloat(prompt("Digite o valor da base:"));
const valorExpo = parseFloat(prompt("Digite o valor do expoente"));
alert(potencia(valorBase, valorExpo));



