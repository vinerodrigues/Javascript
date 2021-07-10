function rand({min = 0, max = 10} = {} ){
    const VALOR = Math.random() * (max - min) + min;
    return Math.floor(VALOR)
}
console.log(rand());
console.log(Math.floor(Math.random(min = 0, max = 10) * (10 - 0) + 0))