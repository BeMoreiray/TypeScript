//sem interpolacação
let nome: string = 'Beatriz';
console.log('O nome da pessoa é ' + nome);

//Com Interpolação
console.log(`O nome da pessoa é ${nome}`);
//OBS.: a interpolação é um recurso que permite a adição de valores como funções, variaveis, objetos de maneira mais simples.

console.log(`A soma dos números ${4 + 6}`);

//.....................funcao1...............................
let temMaisTitulos = function(titulos : number) : boolean{
    return titulos > 35;
}
let numero = 8;
console.log(`Ter ${numero} é suficiente para passar o  Vasco? ${temMaisTitulos(numero) ? 'SIM' : 'NÃO'}`); 
//o dois pontos é um recurso utilizado na interpolação para representar o else.

//......................funcao2...............................
let escreva = (valor : string) => console.log(`O nome é  ${valor}`);

escreva('João ninguém');

function print(): string{
    return 'Beatriz';
}
console.log(`O nome pe ${print()}`);