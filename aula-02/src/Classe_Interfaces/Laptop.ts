 class Laptop{
    tela : number;

    //toda classe possui um construtor.
    constructor(tela : number){
        this.tela = tela; //utilizamos this para diferenciar uma variavel que foi criada no corpo da classe, e logo atribuir o valor da nova variavel que foi criada com o mesmo nome. 
    }

    ligarMonitor(){
        console.log('O minitor foi ligado');
    }

    
}
let computador = new Laptop(21);
    console.log(computador.ligarMonitor());


//henrança com outra classe(lenovo)...............................
class Lenovo extends Laptop implements Gamer{
    memoriaVideo: number = 512;

    constructor (){
        super(21);
    }
    aumentarBrilho(valor: number){
    console.log(`Brilho subiu ${valor} pontos`)
    }

    tamanhoMemoria(){
        console.log(`O tamnho da memoria é ${this.memoriaVideo}`);
    }
}

let pc = new Lenovo();

pc.aumentarBrilho(3);
pc.tamanhoMemoria();

interface Gamer {
    memoriaVideo: number;
}

class Samsung extends Laptop implements Gamer{
    memoriaVideo: number = 512;

    constructor(){
        super(21);
    }
    aumentarBrilho(valor : number){
        console.log(`Brilho subiu ${valor} pontos`)
    }
}

