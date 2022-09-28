import { Veiculo } from "./viculo";

export class Caminhao extends Veiculo{
    tamanhoCacamba: string = 'largura: 2,80M, altura: 2,40M e comprimento: 6,30 M.'

    //constructor(tamanhoCacamba: string){
        //super('amarelo', 'Mercedes-Benz', 'Axor');
    //}

    descarregar(){
        console.log('descarregando...');
    }
}