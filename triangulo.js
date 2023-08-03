const lado1 = parseFloat(prompt(`Digite o primeiro lado do triâgulo:`));
const lado2 = parseFloat(prompt(`Digite o segundo lado do triâgulo:`));
const lado3 = parseFloat(prompt(`Digite o terceiro lado do triâgulo:`));

if(lado1 === lado2 && lado1 === lado3 && lado2 === lado3){
    alert(`Triângulo informado é do tipo Equilátero.`);
}else if(lado1 !== lado2 && lado1 !== lado3 && lado2 === lado3){
    alert(`Triângulo informado é do tipo isósceles.`);
}else if(lado2 !== lado1 && lado2 !== lado1 && lado1 === lado3){
    alert(`Triângulo informado é do tipo isósceles.`);
}else if(lado3 !== lado1 && lado3 !== lado2 && lado1 === lado2){
    alert(`Triângulo informado é do tipo isósceles.`);
}else{
    alert(`Triângulo informado é do tipo escaleno.`);
}

alert(`Programa encerrado`);