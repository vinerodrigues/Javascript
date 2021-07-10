/* Ler um vetor de números inteiros de 30 posições. Depois, ler um número inteiro X,
imprimir quantas vezes o número X aparece no vetor.*/

function main(){
    let vetorDeTrintaPosicoes = obterVetorDeTrintaPosicoes();
    valorASerVerificado = 6;
    verificarNumeroDeOcorrenciaDeUmValor(valorASerVerificado, vetorDeTrintaPosicoes);
}

function obterVetorDeTrintaPosicoes(){
    function rand({min = 0, max = 30} = {} ){
        const VALOR = Math.random() * (max - min) + min;
        return Math.floor(VALOR)
    }
    
    let vetorDeTrintaPosicoes = []
    
    for(let i = 0; i < 30; ++i){
        vetorDeTrintaPosicoes.push(rand());
    }

    return vetorDeTrintaPosicoes;
}

function verificarNumeroDeOcorrenciaDeUmValor(valor, vetorDeTrintaPosicoes){
    function imprimirOcorrencia(valor, contadorDeOcorrencias){
        if(contadorDeOcorrencias > 1){
            console.log(`O número de ocorrências do valor ${valor} é de ${contadorDeOcorrencias} vezes`);
        }
        else if (contadorDeOcorrencias == 1){
            console.log(`O número de ocorrência do valor ${valor} é de ${contadorDeOcorrencias} vez`);
        }
        else{
            console.log(`Não há ocorrências do valor ${valor}`);
        }

    }

    let contadorDeOcorrencias = 0;

    for(let i = 0; i < vetorDeTrintaPosicoes.length; ++i){
        if (vetorDeTrintaPosicoes[i] == valor){
            ++contadorDeOcorrencias;
        }
    }

    imprimirOcorrencia(valor, contadorDeOcorrencias);

}

main();
