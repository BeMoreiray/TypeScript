import {Laptop} from "./computador-base";
import {Gamer} from "./computador-base";


export class LenovoX extends Laptop implements Gamer{
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