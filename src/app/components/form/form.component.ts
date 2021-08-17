import { Component, EventEmitter, OnInit, Output } from '@angular/core';

@Component({
  selector: 'app-form',
  templateUrl: './form.component.html',
  styleUrls: ['./form.component.css']
})
export class FormComponent implements OnInit {

  // Two way databinding
  nombre: string;
  aficion: string;

  //para enviar al padre el bojeto nuevaAficion
  @Output() aficionCreada: EventEmitter<any>

  constructor() { 
    this.nombre = "",
    this.aficion = "",
    this.aficionCreada = new EventEmitter();
  }

  ngOnInit(): void {
  }

  guardarDatos(){
    // muestra como se vinculan los inputs con las variables
    // console.log(this.nombre, this.aficion);

    //creamos este nuevo objeto apra enviarselo al padre, para que este lo agregue al array 
    const nuevaAficion = {
      nombre: this.nombre,
      aficion: this.aficion
    };
    // console.log(nuevaAficion);

		//emitimos el objeto al padre para que lo agregue al array
    this.aficionCreada.emit(nuevaAficion);
  } 
}
