const nota1 = parseFloat(prompt("Digite a primeira nota:"));
const nota2 = parseFloat(prompt("Digite a segunda nota:"));
const nota3 = parseFloat(prompt("Digite a terceira nota:"));

const result = ((nota1*2) + (nota2*3) + (nota3*5)) / 10;

alert(`O resultado da média aritmética ponderada dos números com seus respectivos pesos: ${nota1}(2), ${nota2}(3) e ${nota3}(5) = ${result}`);
