const convert = require('./brlValues');
// aqui nos estamos importando a func que foi exportada no modulo anterior

const usd = 10;
const brl = convert(usd);

// index.js
const brlValue = require('./brlValue');
// dessa forma estariamos chamando mais de uma coisa de dentro do modulo
console.log(brlValue);
console.log(`Valor do dólar: ${brlValue.brl}`);
console.log(`10 dólares em reais: ${brlValue.usdToBrl(10)}`);
