import { Component, Input, OnInit } from '@angular/core';
import { Alunos } from './alunos.model';

@Component({
  selector: 'matri-alunos',
  templateUrl: './alunos.component.html',
  styleUrls: ['./alunos.component.css']
})
export class AlunosComponent implements OnInit {
  @Input() alunos!: Alunos;
  
  
  constructor() { }

  ngOnInit(): void {
  }

}
