let numeros = [];
for (let i = 0; i < 10; i++) {
    let numero = parseFloat(prompt("Digite um número para ser armazenado:"));
    if (numero % 2 !== 0) {
        numero *= 1.05;
    } else if (numero % 2 === 0) {
        numero *= 1.02;
    }
    numeros.push(numero.toFixed(3));
}

alert(`Os números digitados foram: ${numeros}`);