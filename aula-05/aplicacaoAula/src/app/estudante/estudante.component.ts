import { Component, OnInit, Input } from '@angular/core';
import { Estudante } from './estudante.model';

@Component({
  selector: 'bia-estudante',
  templateUrl: './estudante.component.html',
  styleUrls: ['./estudante.component.css']
})
export class EstudanteComponent implements OnInit {
  
   @Input() estudante!: Estudante;

   
  
  constructor() { }

  ngOnInit(): void {
  }
  exibir(){
    console.log(`Estudante: ${this.estudante.nome}`);
  }
}
