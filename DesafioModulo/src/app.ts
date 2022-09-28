import { Caminhao } from "./caminhao";
import { Moto } from "./moto";



let caminhoneiro = new Caminhao('amarelo', 'Mercedes-Benz', 'Axor');
let motoTaxi = new Moto('branca', 'Honda', 'PCX');

console.log(`O caminhão ${caminhoneiro.modelo} é o mais atual do mercado, é produzido pela empresa ${caminhoneiro.fabricante}. A cor escolhida pelo caminhoneiro foi ${caminhoneiro.cor}, como sua especialidade é em transporte de materiais agriculas, decidiu comprar uma caçamba de ${caminhoneiro.tamanhoCacamba}`);

console.log(`O motoTaxi da favela juntou uma grana das corridas e comprou uma moto ${motoTaxi.fabricante} do modelo ${motoTaxi.modelo}, de cor ${motoTaxi.cor}! Esse era seu sonho.`);

 
caminhoneiro.acelerar();
motoTaxi.parar();
caminhoneiro.descarregar();
motoTaxi.empinar();