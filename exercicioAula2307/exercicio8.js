const nome = prompt("Informe seu nome:");
const idade = parseInt(prompt("Informe sua idade:"));
const altura = parseFloat(prompt("Informe sua altura em cm:"));
const peso = parseFloat(prompt("E informe seu peso em Kg:"));


const imc = peso/((altura/100) * (altura/100));

alert(`Olá, ${nome}! Seu IMC é de ${imc.toFixed(2)}. Consulte um médico para saber se seu IMC está compatível com o esperado para sua idade de ${idade} anos.`);