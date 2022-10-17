import { HttpErrorResponse } from "@angular/common/http";
import { throwError } from "rxjs";

export class ErrorHandler{
    static handleError(error: HttpErrorResponse | any){
        let errorMassege: string;
        if(error instanceof HttpErrorResponse){
            errorMassege = `Erro ${error.status} ao acessar a URL ${error.url} - ${error.statusText}`
        }else{
            errorMassege = error.toString();
        }
        console.log(errorMassege);

        return throwError(() => errorMassege);
    }
}