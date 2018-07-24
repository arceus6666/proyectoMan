import { Component, OnInit } from '@angular/core';
import { RestapiService } from '../../services/restapi.service';
import { LoggerService } from '../../services/logger.service';
import { Router } from '../../../../node_modules/@angular/router';

@Component({
  selector: 'app-search-area',
  templateUrl: './search-area.component.html',
  styleUrls: ['./search-area.component.css']
})
export class SearchAreaComponent implements OnInit {
  private arg: string
  private libros: any
  private res: any
  constructor(public _service: RestapiService, 
    private _logger:LoggerService,
    private _router:Router) { 
  }

  ngOnInit() {
  }
  
  getBooks(){
    this._service.getGlobal('/books/get-by-area', '', this.arg)
    .subscribe(data =>{
      this.libros = data
    }, error => {
      console.log(error)
    })
  }
  prestamo(libro){
    libro.borrowerID = this._logger.getID()
    libro.requested = true
    console.log(libro)
    this._service.putGlobal(libro, '/books/update','').subscribe(data => {
      this.res = data
      if (this.res.ok) {
        this._router.navigate(['home'])
      }
    },error=>{
      console.log('error')
      console.log(error)
    })
  }
}
