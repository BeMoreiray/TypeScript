
//............Opção 001...........................
function data(diaSemana : string = 'domingo'): string{
   return diaSemana;
}

console.log(`O dia da semana é ${data('segunda-feira')} `);

//....................Opção 002.................................
function data2(dSemana? : string): string{
    let d = dSemana || 'domingo';
    return d;
}

console.log(`O dia da semana é ${data2('sexta-feira')}`);

//....................Arrow Function.....................................
let diaDaSemana: Array<string> = ['segunda-feira', 'terça-feira', 'quarta-feira', 'quinta-feira', 'sexta-feira', 'sábado', 'domingo'];

//let sorteio = Math.floor(Math.random()) * 6; 
//console.log(sorteio);

let semana = (dia : string = 'domingo') =>{return dia};

console.log(`Hoje é ${semana(diaDaSemana[Math.floor(Math.random()) * 6])}`); //como fazer um sorteio entre os indicies de um array
console.log(`Hojhe é ${semana()}`);