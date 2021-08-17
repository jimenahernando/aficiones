import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  
  listaAficiones : any[];

  constructor(){
    this.listaAficiones =  new Array(
      { nombre: 'Ramiro',
        aficion: 'Pasar calor'},
      {
        nombre: 'Alejandro',
        aficion: 'Macrame'
      }
    );
  }

  onAficionCreada($event: any) {
    // console.log('app.component', $event);
    this.listaAficiones.push($event);
    // console.log(this.listaAficiones);
  }
}
