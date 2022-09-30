export class Veiculo {
    cor: string;
    fabricante: string;
    modelo: string;
    velocidade: number;

    constructor(velocidade: number){
        this.velocidade = velocidade;
    }


    acelerar(velocidade: number): void{
        if(this.velocidade > velocidade){
        console.log(`acelereando a ${velocidade} km/h`);
        }else{
            console.log(`acelerando a ${this.velocidade} km/h`)
        }
    }
    parar(){
        console.log(`Parar...`);
    }

    mostrarVelocidadeMaxima(): void{
        console.log(`A velocidade máxima é: ${this.velocidade} `);
    }

}