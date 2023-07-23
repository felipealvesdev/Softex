const firstNumber = parseFloat(prompt("Digite um número:"));
const mathOperation = prompt("Digite a operação matemática desejada: Soma(+); Subtração(-); Multiplicação(*), divisão(/), potenciação(**) ou radiciação(**1/)");
const secondNumber = parseFloat(prompt("Digite o segundo número"));
let result;

if(mathOperation === "+"){
    result = firstNumber + secondNumber;
    alert(`Resultado de ${firstNumber}+${secondNumber}= ${result}`);
}else if(mathOperation === "-"){
    result = firstNumber - secondNumber;
    alert(`Resultado de ${firstNumber}-${secondNumber}= ${result}`);
}else if(mathOperation === "*"){
    result = firstNumber * secondNumber;
    alert(`Resultado de ${firstNumber}*${secondNumber}= ${result}`);
}else if(mathOperation === "/"){
    result = firstNumber / secondNumber;
    alert(`Resultado de ${firstNumber}/${secondNumber}= ${result}`);
}else if(mathOperation === "**"){
    result = firstNumber ** secondNumber;
    alert(`Resultado de ${firstNumber}**${secondNumber}= ${result}`);
}else if(mathOperation === "**1/"){
    result = firstNumber ** (1/secondNumber);
    alert(`Resultado de ${firstNumber}(**1/(${secondNumber}))= ${result}`);
}else{
    alert("Ocorreu algum erro. Por favor, reinicie.");
}