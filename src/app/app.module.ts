import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { FormComponent } from './components/form/form.component';
import { ListaAficionesComponent } from './components/lista-aficiones/lista-aficiones.component';

@NgModule({
  declarations: [
    AppComponent,
    FormComponent,
    ListaAficionesComponent
  ],
  imports: [
    BrowserModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
