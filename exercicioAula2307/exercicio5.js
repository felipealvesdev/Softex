const altura = parseFloat(prompt("Digite a altura(cm):"));
const largura = parseFloat(prompt("Digite a largura(cm):"));
const profundidade = parseFloat(prompt("Digite a profundidade(cm):"));

const volume = altura * largura * profundidade;
const volumeM3 = (altura/100) * (largura/100) * (profundidade/100);

alert(`O volume da caixa d'água em cm³: ${volume.toFixed(3)}cm³`);
alert(`E o volume da caixa d'água em m³: ${volumeM3.toFixed(3)}m³`);
