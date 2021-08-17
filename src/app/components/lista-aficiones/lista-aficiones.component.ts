import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-lista-aficiones',
  templateUrl: './lista-aficiones.component.html',
  styleUrls: ['./lista-aficiones.component.css']
})
export class ListaAficionesComponent implements OnInit {

  @Input() aficiones: any[];

  constructor() { 
    this.aficiones = new Array();
  }

  ngOnInit(): void {
    // console.log(this.aficiones)
  }

  // metodo que nos permite recorrer la lista de aficiones con articles consecutivos
  mostrarLista(): any{
    let result = "";
    for(let aficion of this.aficiones){
      result += `<article class="article" >
                  <h3>${aficion.nombre} - ${aficion.aficion}</h3>
                </article>`;
    }
    return result;
  }
}
