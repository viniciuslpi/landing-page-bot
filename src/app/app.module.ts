import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HomeComponent } from './home/home.component';
import { MenuComponent } from './home/menu/menu.component';
import { QuemSomosComponent } from './home/quem-somos/quem-somos.component';
import { ProjetoComponent } from './home/projeto/projeto.component';
import { Projeto2Component } from './home/projeto2/projeto2.component';
import { IntegrantesComponent } from './home/integrantes/integrantes.component';
import { FooterComponent } from './home/footer/footer.component';

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    MenuComponent,
    QuemSomosComponent,
    ProjetoComponent,
    Projeto2Component,
    IntegrantesComponent,
    FooterComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
