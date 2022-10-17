import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { HomeComponent } from './home/home.component';
import { RodapeComponent } from './rodape/rodape.component';
import { CabecalhoComponent } from './cabecalho/cabecalho.component';
import { RouterModule} from '@angular/router';
import { ROUTES} from './app.routes';

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    RodapeComponent,
    CabecalhoComponent
  ],
  imports: [
    BrowserModule,
    RouterModule.forRoot(ROUTES)
   
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
