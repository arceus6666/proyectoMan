import { Component, OnInit } from '@angular/core';
import { RestapiService } from '../services/restapi.service';
import { Router } from '../../../node_modules/@angular/router';

@Component({
  selector: 'app-prestamos',
  templateUrl: './prestamos.component.html',
  styleUrls: ['./prestamos.component.css']
})
export class PrestamosComponent implements OnInit {
  private year1:string
  private year2:string
  private res: any
  private libros: any
  constructor(public _service: RestapiService,
  private _router: Router) { 
    
  }

  ngOnInit() {
    
  }

  buscar(){
    this._service.getGlobal('/books/get-borrowed', '', this.year1 + ' ' + this.year2).subscribe(data =>{
      this.libros = data
    }, error => {
      console.log(error)
    })
  }
  

}
