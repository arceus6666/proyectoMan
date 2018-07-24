import { Component, OnInit } from '@angular/core';
import {ActivatedRoute, Params, Router} from "@angular/router";
import { RestapiService } from '../services/restapi.service';
import { Libro } from '../models/libro';

@Component({
  selector: 'app-busqueda',
  templateUrl: './busqueda.component.html',
  styleUrls: ['./busqueda.component.css']
})
export class BusquedaComponent implements OnInit {
  private objLibro: any
  private parametro: any
  private tipoSeleccionado: boolean
  private tipoBusqueda: string
  constructor(
    private _route: ActivatedRoute
  ) { }

  ngOnInit() {
    this._route.params.forEach((params: Params) => {
      this.parametro = params['page'];
    });
    // this._service.getGlobal<Libro[]>('/libros', '').subscribe( data => {
    // this.objLibro = data;
    // });
  }

  select(bool) {
    console.log(bool)
    this.tipoSeleccionado = bool
  }
  

}
