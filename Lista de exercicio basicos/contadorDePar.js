/*Leia um vetor de 40 posições e conte quantos elementos pares se encontram no
vetor.*/

function main(){
    let vetorDeQuarentaValores = obterVetorDeQuarentaValores();
    imprimirQuantidadeDeValoresPar(vetorDeQuarentaValores);
}

function obterVetorDeQuarentaValores(){

    let quarentaValoresAleatorios = [];

    function gerarValoresAleatorios({min = -273.15, max = 273.15} = {} ){
        const VALOR = Math.random() * (max - min) + min;
        return Math.floor(VALOR);
    }
    
    for(let i = 0; i < 40; ++i){
        quarentaValoresAleatorios.push(gerarValoresAleatorios());
    }
  
    return quarentaValoresAleatorios;
}

function imprimirQuantidadeDeValoresPar(vetorDeQuarentaValores){
    let contadorDeNumerosPar = 0;

    for(let i = 0; i < vetorDeQuarentaValores.length; ++i){
        if (vetorDeQuarentaValores[i] % 2 == 0){
            ++contadorDeNumerosPar;
        }
    }

    console.log(`A quantidade de valores par é ${contadorDeNumerosPar}`);
}

main();
