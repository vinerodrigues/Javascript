/* Leia uma frase e imprima o total de vogais, o total de brancos e o total do resto.*/
function main(){
    let texto = 'A casa branca';
    imprimirCaracteresEmBranco(texto);
    imprimirVogais(texto);
    imprimirCaracteresSemSerVogaisNemBrancos(texto);
}

function imprimirCaracteresEmBranco(texto){
    let contadorDeCaracteresBranco = 0;

    for(let i = 0; i < texto.length; ++i){
        if(texto[i] == ' '){
            ++contadorDeCaracteresBranco;
        }
    }

    console.log(`A quantidade de caracteres branco é de: ${contadorDeCaracteresBranco}`);
}

function imprimirVogais(texto){
    let contadorDeVogais = 0;
    texto = texto.toLowerCase();

    for(let i = 0; i < texto.length; ++i){
        
        if(texto[i] == 'a' || texto[i] == 'e' || texto[i] == 'i' || texto[i] == 'o' || texto[i] == 'u'  ){
            ++contadorDeVogais;
        }
    }

    console.log(`Há ${contadorDeVogais} vogais nesse texto`);
}

function imprimirCaracteresSemSerVogaisNemBrancos(texto){
    let contadorDeCaracteres = 0;
    texto = texto.toLowerCase;
    for ( let i = 0; i < texto.length; ++i){
        
        if(texto[i] == 'a' || texto[i] == 'e' || texto[i] == 'i' || texto[i] == 'o' || texto[i] == 'u'  ){
            continue;
        }
        else if(texto[i] == ' '){
            continue;
        }
        else{
            ++contadorDeCaracteres;
        }
    }
    console.log(`Há ${contadorDeCaracteres} caracteres sem ser brancos ou vogais`);
}

main();


