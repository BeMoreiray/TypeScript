//array clássico
let nomes: Array<string> = ['Matheus', 'Beatriz', 'Arian'];

//array anônimo
let numeros = [2, 5, 7, 9];

console.log(nomes[1]);
console.log(numeros[2]);

//listando todos os indicies de um array 
//               arrow function 
nomes.forEach((x) =>{
    console.log(x)

});
//o foreach le todos os indicies do array pegando todos os elementos 1 de cada vez e passa o parametro para a function que vai exibir cada item.

numeros.forEach((valor) => {
    if(valor == 9){
        console.log('Este valor é proibido');
    }
    console.log('Valor lido ' +  valor);
});