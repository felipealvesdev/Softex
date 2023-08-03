alert("Programa para calcular velocidade media");
const distPercorrida = parseFloat(prompt("Digite a distância percorrida em Km"));
const tempo = parseFloat(prompt("Digite aqui o tempo de deslocamento(em horas):"));

const velocidadeMedia = distPercorrida / tempo;

alert(`A velocidade média é: ${velocidadeMedia}Km/h`);
alert(`Programa encerrado.`);