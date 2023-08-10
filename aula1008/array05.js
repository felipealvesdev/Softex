let numeros = [];
for (let i = 0; i < 5; i++) {
    const numero = parseFloat(prompt("Digite um número para ser armazenado:"));
    numeros.push(numero);
}

alert(`Os números digitados foram: ${numeros}`);
alert(`Os números digitados em ordem reversa foram: ${numeros.reverse()}`)