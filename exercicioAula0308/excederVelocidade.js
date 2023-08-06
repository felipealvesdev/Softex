const velocidade = parseFloat(prompt(`Velocidade máxima de 110Km/h. Informe a velocidade do veículo:`));

if(velocidade>=110){
    alert(`Veículo excedeu a velocidade limite de 110Km/h. Velocidade do veículo = ${velocidade}Km/h.`);
}else{
    alert(`Velocidade = ${velocidade}Km/h. Velocidade dentro do limite de 110Km/h.`)
}

alert(`Programa encerrado.`);
