import { Caminhao } from "./caminhao";

export class Veiculo{
    cor: string;
    fabricante: string;
    modelo: string;

    constructor(cor: string, fabricante: string, modelo: string){
        this.cor = cor;
        this.fabricante = fabricante;
        this.modelo = modelo;

    }
    acelerar(){
        console.log('0Km/h...10km/h...50km/h');
    }

    parar(){
        console.log('50Km/h...10Km/h...0km/h ');
    }


}
//let caminhoneiro = new Caminhao('amarelo', 'Mercedes-Benz', 'Axor');