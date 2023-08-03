
let soma = 0;
let ligado = true;

while(ligado){
    const num = parseFloat(prompt(`Insira um número. Enquanto o número for maior que 1, o programa continuará perguntando!`));
    if(num<1){
        break;
    }
    soma+=num;
    
}

alert(`O resultado da soma de todos os números é: ${soma}`);