import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-listado-inscripciones',
  templateUrl: './listado-inscripciones.component.html',
  styleUrls: ['./listado-inscripciones.component.scss']
})
export class ListadoInscripcionesComponent implements OnInit {
  titulo: string = 'Listado de Inscripciones';
  constructor() { }

  ngOnInit(): void {
  }

}
