const idade = parseInt(prompt(`Informe sua idade:`));

if(idade>=18){
    alert(`Parabéns, você já chegou a maioridade!`);
}else{
    const delta = 18 - idade;
    alert(`Você ainda não chegou na maioriade. Restam ${delta} anos para chegar aos 18 anos.`)
}

alert(`Programa encerrado`);