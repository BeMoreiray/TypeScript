import { Component } from '@angular/core';

@Component({
  selector: 'bia-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  alunos = {nome: 'João Silva', aprovado: true};
  
}
