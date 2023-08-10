let array = [];
for (let i = 0; i < 5; i++) {
    const info = parseInt(prompt("Digite um número inteiro para ser armazenado:"));
    array.push(info);
}

alert(`Os números digitados foram: ${array}`);