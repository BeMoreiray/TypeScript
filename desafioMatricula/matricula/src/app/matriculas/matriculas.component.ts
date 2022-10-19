import { Component, OnInit } from '@angular/core';
import { Alunos } from './alunos/alunos.model';
import { MatriculasService } from './matriculas.service';
import{ErrorHandler} from "../app-error-handler";

@Component({
  selector: 'matri-matriculas',
  templateUrl: './matriculas.component.html',
  styleUrls: ['./matriculas.component.css']
})
export class MatriculasComponent implements OnInit {
  matriculas!: Alunos[];

  constructor(private alunosService: MatriculasService) { }

  ngOnInit(): void {
     this.alunosService.listarAlunos().subscribe(matriculas => this.matriculas= matriculas);
  }
  

}
