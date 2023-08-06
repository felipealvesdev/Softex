const num1 = parseFloat(prompt(`Informe o primeiro número:`));
const num2 = parseFloat(prompt(`Informe o segundo número:`));

alert("Exibindo os números inseridos em ordem crescente:");

if(num1<num2){
    alert(`${num1}, ${num2}`);
}else if(num1>num2){
    alert(`${num2}, ${num1}`);
}else{
    alert(`Números iguais`);
}
