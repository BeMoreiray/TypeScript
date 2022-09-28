//Utilização do tipo enum, que é praticamente um objeto com funcionamento de array
enum Cor{
    Verde = 5, 
    Amarelo,
    Vermelho
};


let qualCor: Cor; //quando a sintaxe da variavel é atribuida com dois pontos, quer dizer que ela está definindo seu tipo, n caso o tipo é o enum
qualCor = Cor.Verde;

console.log('A cor escolhida foi ' + qualCor);
