const prod1 = parseFloat(prompt(`Digite o preço do 1º item:`));
const prod2 = parseFloat(prompt(`Digite o preço do 2º item:`));
const prod3 = parseFloat(prompt(`Digite o preço do 3º item:`));

let maisBarato;

if(prod1<prod2 && prod1<prod3){
    maisBarato = `O primeiro produto, de preço R$${prod1} é o preço mais barato.`;
}else if(prod2<prod1 && prod2<prod3){
    maisBarato = `O segundo produto, de preço R$${prod2} é o preço mais barato.`;
}else if(prod3<prod1 && prod3<prod2){
    maisBarato = `O terceiro produto, de preço R$${prod3} é o preço mais barato.`;
}else {
    maisBarato = "Mais de um produto inserido com o mesmo preço."
}

alert(`O resultado: ${maisBarato}`);
