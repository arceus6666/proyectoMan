import { Component, OnInit } from '@angular/core';
import { LoggerService } from '../services/logger.service';
import { RestapiService } from '../services/restapi.service';
import { User } from '../models/user';
import { Router } from '../../../node_modules/@angular/router';

@Component({
  selector: 'app-perfil',
  templateUrl: './perfil.component.html',
  styleUrls: ['./perfil.component.css']
})
export class PerfilComponent implements OnInit {
  public libros: any
  public perfil: any
  public user: User
  public edit: boolean
  public res: any
  public newDay: any
  constructor(private _logger:LoggerService,
  private _service:RestapiService,
  private _router: Router) {
    this.edit = false
    this.user = new User('', '', '', 0, false, '', '', new Date, new Date)
  }

  ngOnInit() {
    console.log('perfil: ' + this.perfil)
    this._service.getGlobal('/users/find-user', '', 
    this._logger.getID()).subscribe(data=>{
      console.log(data)
      this.perfil = data
    },error=>{
      console.log('error\n'+error)
    })

    this._service.getGlobal('/books/find-mine', '', 
    this._logger.getID()).subscribe(data=>{
      this.libros = data
      for (let libro in this.libros) {
        this.libros[libro].dateBorrowed = this.addDays(this.libros[libro].dateBorrowed)
      }
    },error=>{
      console.log(error)
    })
  }

  editar(){
    this.edit = true
  }

  addDays(date) {
    var result = new Date(date);
    result.setDate(result.getDate() + 5);
    return result;
  }

  onSubmit(){
    console.log(this.perfil)
    this.edit = false
    this._service.putGlobal(this.perfil, '/users/update','').subscribe(data => {
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
