import { Component, OnInit } from '@angular/core';
import { User } from '../models/user';
import { RestapiService } from '../services/restapi.service';

@Component({
  selector: 'app-usuario',
  templateUrl: './usuario.component.html',
  styleUrls: ['./usuario.component.css']
})
export class UsuarioComponent implements OnInit {
  private user: any
  private modify: boolean
  private password: string
  constructor(private _service: RestapiService) {
    //this.user = new User('', '', '', 0, '', '', new Date, new Date)
   }

  ngOnInit() {
  }
  cargarPerfil() {
    this.modify = false
    this._service.getGlobal('/user/find-user', '', this.password).subscribe(data => {
      this.user = data
    }, err => {
      console.error(err)
    })
  }

  setModify(){
    this.modify = !this.modify
  }
}
