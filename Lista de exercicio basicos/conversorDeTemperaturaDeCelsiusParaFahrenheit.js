function main(){
    
    let temperaturaEmCelcius = obterTemperaturaEmCelcius();
    let temperaturaEmFahrenheit = conversorDeCelciusParaFahrenheit(temperaturaEmCelcius);
    
    mostrarTemperatura(temperaturaEmCelcius);
    mostrarTemperatura(temperaturaEmFahrenheit); 
}

/* em JS a função pode ser armazenada em uma variavel*/
/*As setas substituem 'function' o que deixa a função mais consiza*/

const obterTemperaturaEmCelcius = () => 35.55;

const conversorDeCelciusParaFahrenheit = (temperaturaEmCelcius) => {
    temperaturaEmFahrenheit = ((temperaturaEmCelcius*9)/5) + 32;
    return temperaturaEmFahrenheit; 
}


function mostrarTemperatura(temperatura){
    console.log(`A temperatura é ${temperatura}° `);
}

main();