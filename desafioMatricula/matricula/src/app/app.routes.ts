import { Routes } from "@angular/router";
import { HomeComponent } from "./home/home.component";
import { MatriculasComponent } from "./matriculas/matriculas.component";

export const ROUTES: Routes = [
    {path: '', component: HomeComponent},
    {path: 'matriculas', component: MatriculasComponent}
    
]