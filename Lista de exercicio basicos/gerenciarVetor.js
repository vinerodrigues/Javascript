/*Leia um vetor de 16 posições e troque as 8 primeiras posições pelas 8 últimas
posições. Imprima o vetor original e o vetor trocado*/

function main(){
    let valores = obterValores();
    let valoresTrocados = trocarMetadeInferiorPelaMetadeSuperior(valores);

    console.log(valores);
    console.log(valoresTrocados)
}

function obterValores(){
    function gerarValoresAleatorios({min = 0, max = 20} = {} ){
        const VALOR = Math.random() * (max - min) + min;
        return Math.floor(VALOR);
    }

    let valores = [];

    for (let i = 0; i < 16; ++i){
        valores.push (gerarValoresAleatorios());
    }

    return valores;
}

function trocarMetadeInferiorPelaMetadeSuperior(valores){
    let valoresTrocados = []
    const METADE_DA_LISTA = valores.length/2;
    
    for (let i = 0; i < valores.length; ++i){
        
        if(i < METADE_DA_LISTA){
            valoresTrocados.push( valores[(METADE_DA_LISTA + i)] );
        }
        
        else{
            valoresTrocados.push( valores[(i - METADE_DA_LISTA)] );
        }
    }

    return valoresTrocados;
}

main();