import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { ElementoModule } from './elemento/elemento.module';
import { PacientesModule } from './pacientes/pacientes.module';

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    PacientesModule 
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
