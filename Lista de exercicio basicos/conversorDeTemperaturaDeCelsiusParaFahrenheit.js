function main(){
    
    let temperaturaEmCelcius = obterTemperaturaEmCelcius();
    let temperaturaEmFahrenheit = conversorDeCelciusParaFahrenheit(temperaturaEmCelcius);
    
    mostrarTemperatura(temperaturaEmCelcius);
    mostrarTemperatura(temperaturaEmFahrenheit); 
}

function obterTemperaturaEmCelcius(){
    temperatura = 35.55
    return temperatura
}

function conversorDeCelciusParaFahrenheit(temperaturaEmCelcius){
    temperaturaEmFahrenheit = ((temperaturaEmCelcius*9)/5) + 32
    return temperaturaEmFahrenheit 
}

function mostrarTemperatura(temperatura){
    console.log(temperatura)
}

main()