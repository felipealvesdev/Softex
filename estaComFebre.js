const temperatura = parseFloat(prompt(`Digite a sua temperatura:`));


if(temperatura<36){
    alert(`ATENÇÃO! VOCÊ ESTÁ COM HIPOTERMIA. SUA TEMPERATURA: ${temperatura}ºC. ABAIXO DE 36º É CONSIDERADO HIPOTÉRMICO.`);
}else if(temperatura<36.7){
    alert(`Temperatura coporal dentro da média. Temperatura: ${temperatura}ºC.`);
}else{
    alert(`ATENÇÃO! VOCÊ ESTÁ COM FEBRE. SUA TEMPERATURA: ${temperatura}ºC. A PARTIR DE 36,7 GRAUS É CONSIDERADO FEBRE.`);
}


