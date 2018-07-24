import { Component, OnInit } from '@angular/core';
import { RestapiService } from '../services/restapi.service';
import { Router } from '../../../node_modules/@angular/router';

@Component({
  selector: 'app-pendientes',
  templateUrl: './pendientes.component.html',
  styleUrls: ['./pendientes.component.css']
})
export class PendientesComponent implements OnInit {
  private res: any
  private libros: any
  constructor(public _service: RestapiService,
  private _router: Router) { 
    
  }

  ngOnInit() {
    this._service.getGlobal('/books/get-requested', '', '').subscribe(data =>{
      this.libros = data
      console.log('data')
      console.log(data)
      console.log('data')
    }, error => {
      console.log(error)
    })
  }

  prestar(libro){
    console.log(libro)
    libro.borrowed = true
    libro.requested = false
    this._service.putGlobal(libro, '/books/update','').subscribe(data => {
      this.res = data
      if (this.res.ok) {
        this._router.navigate(['pendientes'])
      }
    },error=>{
      console.log('error')
      console.log(error)
    })
  }
}
