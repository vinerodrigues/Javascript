/*1. Faça um programa para ler 50 valores de temperaturas em graus Celsius.
Transformar essas temperaturas em Farenheit e imprimir a media das temperaturas
em Celsius e Farenheit e quantas temperaturas ficaram acima da media em Farenheit.*/

function main(){

    let temperaturasEmCelcius = obterTemperaturaEmGrausCelcius(); 
    let temperaturasEmFahrenheit = converterListaDeCelciusParaFahrenheit(temperaturasEmCelcius);

    let mediaDasTemperaturasEmCelcius = obterMediaDasTemperaturas(temperaturasEmCelcius);
    imprimirMediaDasTemperaturasEmCelcius(mediaDasTemperaturasEmCelcius);
    imprimirQuantidadeDeTemperaturaAcimaDaMedia(temperaturasEmCelcius, mediaDasTemperaturasEmCelcius );

    let mediaDasTemperaturasEmFahrenheit = obterMediaDasTemperaturas(temperaturasEmFahrenheit);
    imprimirMediaDasTemperaturasEmFahrenheit(mediaDasTemperaturasEmFahrenheit);    
    imprimirQuantidadeDeTemperaturaAcimaDaMedia(temperaturasEmFahrenheit, mediaDasTemperaturasEmFahrenheit );
    
    //mostrarTemperatura(temperaturasEmCelcius);
    //mostrarTemperatura(temperaturaEmFahrenheit); 
}

function obterTemperaturaEmGrausCelcius(){    
    let temperaturasEmCelcius = [];

    function gerarValoresAleatorios({min = -273.15, max = 273.15} = {} ){
        const VALOR = Math.random() * (max - min) + min;
        return Math.floor(VALOR)
    }

    for ( let i = 0; i < 50; ++i){
        temperaturasEmCelcius.push(gerarValoresAleatorios());
    }

    return temperaturasEmCelcius;
}

function converterListaDeCelciusParaFahrenheit(temperaturasEmCelcius){
    let temperaturasEmFahrenheit = [];

    for( let i = 0; i < temperaturasEmCelcius.length; ++i){
        temperaturasEmFahrenheit.push(conversorDeCelciusParaFahrenheit(temperaturasEmCelcius[i]));
    }

    return temperaturasEmFahrenheit;
}

const conversorDeCelciusParaFahrenheit = (temperaturaEmCelcius) => {
    temperaturaEmFahrenheit = ((temperaturaEmCelcius*9)/5) + 32;
    return temperaturaEmFahrenheit; 
}

const imprimirMediaDasTemperaturasEmCelcius = (mediaDasTemperaturasEmCelcius) => console.log(`A média das temperaturas em Celcius é ${mediaDasTemperaturasEmCelcius.toFixed(2)} graus`);
    ;

const imprimirMediaDasTemperaturasEmFahrenheit = (mediaDasTemperaturasEmFahrenheit) => console.log(`A média das temperaturas em Fahrenheit é ${mediaDasTemperaturasEmFahrenheit.toFixed(2)} graus`);
    ;
    
function obterMediaDasTemperaturas(temperaturas){
    let mediaDasTemperaturas = 0;
    
    for(let i = 0; i < temperaturas.length; ++i){
        mediaDasTemperaturas += temperaturas[i]
    }

    return (mediaDasTemperaturas / temperaturas.length)
}

function imprimirQuantidadeDeTemperaturaAcimaDaMedia(temperaturas, media){
    let contadorDeValoresAcimaDaMedia = 0

    for( let i = 0; i < temperaturas.length; ++i){
        if((temperaturas[i] > media )){
            contadorDeValoresAcimaDaMedia += 1;
        }
    }

    console.log(`A quantidade de temperaturas em acima da média é ${contadorDeValoresAcimaDaMedia} \n`)
}

function mostrarTemperatura(temperatura){
    for(let i = 0; i < temperatura.length; ++i){
        console.log(`A temperatura é ${temperatura[i]}° `);
    }
}

main();

/*
* em JS a função pode ser armazenada em uma variavel
* As setas substituem 'function' o que deixa a função mais consiza
* Exemplo:
->  const obterTemperaturaEmCelcius = () => 35.55;

->  
    */