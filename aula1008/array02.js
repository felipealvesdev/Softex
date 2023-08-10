let nomes = [];
for (let i = 0; i < 5; i++) {
    const nome = prompt("Digite um nome para ser armazenado:");
    nomes.push(nome);
}

alert(`Os nomes digitados foram: ${nomes}`);