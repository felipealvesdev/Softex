const nomes = ["Felipe", "Maria", "José", "João", "Alex"];
const numeros = [7, 6, 3, 10, 5, 9, 7.8, 9.2, 4.7, 7.3];

// usando push e unshift
nomes.push("Silvio");
nomes.unshift("Ulisses");
alert(nomes);

// utilizando pop e shift
nomes.shift();
nomes.pop();
alert("Usando pop e shift " + nomes);

// splice e slice
alert(`Utilizando splice(1,2) ${nomes.splice(1, 2)}`)
alert(`Utilizando slice ${nomes.slice(0, 3)}`);

// utilizando o sort
alert(nomes.sort());

// utilizando reverse
alert(nomes.reverse());

// utilizando indexOf
alert(nomes.indexOf("Felipe"));

