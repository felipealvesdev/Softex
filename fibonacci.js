//primeiro e segundo = terceiro
// segundo e terceiro = quarto
// terceiro e quarto = quinto
let seqFibonacci = [0,1,1];

for(let i = 3; i<100; i++){
    seqFibonacci[i] = seqFibonacci[i-1] + seqFibonacci[i-2];
    if(seqFibonacci[i]>=10000){
        break;
    }
}
alert(seqFibonacci);