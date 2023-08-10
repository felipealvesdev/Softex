let numeros = [];
for (let i = 0; i < 5; i++) {
    const numero = parseInt(prompt("Digite um número inteiro para ser armazenado:"));
    numeros.push(numero);
}

alert(`Os números digitados foram: ${numeros.reverse()}`);