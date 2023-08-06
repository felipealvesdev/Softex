const numero = parseInt(prompt("Digite um número inteiro para saber o seu fatorial:"));
let fatorial = 1;

for(let i = numero; i>=1;i--){
    fatorial*= i;
}

alert(`O resultado do fatorial de ${numero}! é  = ${fatorial}`);
