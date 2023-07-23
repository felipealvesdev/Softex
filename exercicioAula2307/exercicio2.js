const firstNumber = parseFloat(prompt("Digite um número:"));
const secondNumber = parseFloat(prompt("Digite um segundo número:"));
let delta;

if(firstNumber>= secondNumber){
    delta = firstNumber - secondNumber;
    alert(`A diferença entre os números é de: ${delta}`); 
    
}else if(secondNumber>=firstNumber){
    delta = secondNumber - firstNumber;
    alert(`A diferença entre os números é de: ${delta}`);
}