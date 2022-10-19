import {Injectable } from "@angular/core";
import { Alunos } from "./alunos/alunos.model";
import{HttpClient} from '@angular/common/http';
import { catchError, Observable } from "rxjs";
import { MATRICULA_API } from "../app.api";
import{ErrorHandler} from "../app-error-handler";


@Injectable()
export class MatriculasService{
    matriculas: Alunos[] = [
    
    ];

    constructor(private http: HttpClient){}
    

    listarAlunos(): Observable<Alunos[]>{
        return this.http.get<Alunos[]>(`${MATRICULA_API}/alunos`).pipe(catchError(ErrorHandler.handleError));
    }
}