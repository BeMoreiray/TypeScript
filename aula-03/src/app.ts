import { Laptop } from "./computador-base";
import { Lenovo } from "./lenovo";
import { LenovoX } from "./lenovox";




let computador = new Laptop(21);
    console.log(computador.ligarMonitor());



let lenovo = new Lenovo();
let lenovo2 = new LenovoX();

lenovo.aumentarBrilho(3);
lenovo2.tamanhoMemoria();



 