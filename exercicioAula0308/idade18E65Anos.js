let ligado = true;
let contador18 = 0;
let contadorAdulto = 0;
let contador65 = 0;

while(ligado){
    const idade = parseInt(prompt(`Insira sua idade:`));
    if(idade<=1){
        ligado = false;
    }else if(idade<18){
        contador18++;
    }else if(idade<65){
        contadorAdulto++;
    }else if(idade>=65){
        contador65++;
    }
}

alert(`A quantidade de pessoas abaixo de 18 anos: ${contador18}, a quantidade de adultos entre 18 e 64 anos: ${contadorAdulto} e a quantidade de adultos maior de 65 anos: ${contador65}`);
