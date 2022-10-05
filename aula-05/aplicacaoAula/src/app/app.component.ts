import { Component } from '@angular/core';
import { Estudante } from './estudante/estudante.model';

@Component({
  selector: 'bia-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  estudantes: Estudante[] =[

    {nome: 'Ana Clara', aprovado: true, escola: 'Senac'},
    {nome: 'Arian Weslley', aprovado: false, escola: 'Senac'},
    {nome: 'Nicolas', aprovado: true}
]

}
