import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { HomeComponent } from './home/home.component';
import { RodapeComponent } from './rodape/rodape.component';
import { CabecalhoComponent } from './cabecalho/cabecalho.component';
import { RouterModule} from '@angular/router';
import { ROUTES} from './app.routes';
import { MatriculasComponent } from './matriculas/matriculas.component';
import { AlunosComponent } from './matriculas/alunos/alunos.component';
import { MatriculasService } from './matriculas/matriculas.service';
import { HttpClientModule } from '@angular/common/http';

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    RodapeComponent,
    CabecalhoComponent,
    MatriculasComponent,
    AlunosComponent
  ],
  imports: [
    BrowserModule,
    RouterModule.forRoot(ROUTES),
    HttpClientModule
   
  ],
  providers: [MatriculasService],
  bootstrap: [AppComponent]
})
export class AppModule { }
