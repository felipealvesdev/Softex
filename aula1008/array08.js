const nomes = ["Felipe", "Maria", "José", "João", "Alex"];

let nomeProcurado = prompt("Digite um nome a ser procurado na lista.");
let nomeEncontrado = false;


for (let i = 0; i < nomes.length; i++) {
    if (nomes[i].toLowerCase() === nomeProcurado.toLowerCase()) {
        nomeEncontrado = true;
    }
}
if (nomeEncontrado === true) {
    alert("Nome encontrado na lista.")
} else {
    alert("Nome não encontrado na lista.")
}