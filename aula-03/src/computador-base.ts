export class Laptop{
    tela : number;

    //toda classe possui um construtor.
    constructor(tela : number){
        this.tela = tela; //utilizamos this para diferenciar uma variavel que foi criada no corpo da classe, e logo atribuir o valor da nova variavel que foi criada com o mesmo nome. 
    }

    ligarMonitor(){
        console.log('O minitor foi ligado');
    }

    
}

export interface Gamer {
    memoriaVideo: number;
}