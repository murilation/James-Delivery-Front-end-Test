import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HeaderComponent } from './components/header/header.component';
import { ListaComponent } from './pages/lista/lista.component';
import { CardComponent } from './components/card/card.component';
import { DetalhesComponent } from './pages/detalhes/detalhes.component';
import { BackComponent } from './components/back/back.component';
import { LogoShopComponent } from './components/logo-shop/logo-shop.component';
import { HttpClientModule } from '@angular/common/http';
import { ReactiveFormsModule } from '@angular/forms';
@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    ListaComponent,
    CardComponent,
    DetalhesComponent,
    BackComponent,
    LogoShopComponent
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    ReactiveFormsModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
