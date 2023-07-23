const number = parseFloat(prompt("Digite um número para saber se é ímpar ou par:"));
let result;

if(number === 0){
    alert(`O número ${number} não é nem ímpar e nem par!`);
}else if(number %2 !== 0){
    alert(`O número ${number} é ímpar.`);
}else if(number %2 === 0){
    alert(`O número ${number} é par.`);
}