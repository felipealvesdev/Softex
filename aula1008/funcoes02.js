function soma(x, y) {
    return x + y;
}

const valorX = parseFloat(prompt("Digite um primeiro valor"));
const valorY = parseFloat(prompt(`Digite um segundo valor para ser somado ao ${valorX}`));

alert(soma(valorX, valorY));