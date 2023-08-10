let numeros1 = [];
let numeros2 = [];
for (let i = 0; i < 5; i++) {
    const numero = parseInt(prompt("Digite um número inteiro para ser armazenado:"));
    numeros1.push(numero);
}
numeros2 = [...numeros1];
alert(`Os números digitados foram: [${numeros1}] e o segundo array copiado: [${numeros2}]`);
