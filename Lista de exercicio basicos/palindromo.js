/*Um palíndromo é uma cadeia que pode ser lida de frente para trás e de trás para
frente. Ex: ‘SOMOS’ ‘1234321’. Implemente a função palindromo(palavra). O
parâmetro palavra é uma string. A função deverá retornar True se for um palíndromo e
False caso contrário.*/

function main(){
    let palavra = lerPalavra();
    console.log(`Palavra verificada ${palavra}`)
    verificarSePalavraEhPalindromo(palavra);
}

const lerPalavra = () => 'aaaa';
    ;

function verificarSePalavraEhPalindromo(palavra){
    
    const METADE_DA_LISTA = (palavra.length/2);
    const TAMANHO_DA_LISTA = (palavra.length);
    palavra = palavra.toLowerCase();

    for(let i = 0; i < METADE_DA_LISTA; ++i){
 
        if (palavra[i] != palavra [TAMANHO_DA_LISTA - 1 - i]){
            console.log(`Não é palindromo`);
            return null;
        }
    }

    console.log(`É Palindromo`);

}

main();