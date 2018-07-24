import { Component, OnInit } from '@angular/core';
import { User } from '../models/user';
import { RestapiService } from '../services/restapi.service';

@Component({
  selector: 'app-registro',
  templateUrl: './registro.component.html',
  styleUrls: ['./registro.component.css']
})
export class RegistroComponent implements OnInit {
  public roleinput: string
  public user: User
  public userRes: any
  constructor(private _service: RestapiService) { 
    this.user = new User('', '', '', 0, false, '', '', new Date, new Date)
  }

  ngOnInit() {
  }

  onSubmit(){
    this._service.postGlobal(this.user, '/users/register-user', '')
    .subscribe(data => {
      this.userRes = data
    }, err => {
      console.log(err)
    })
    this.user.role = this.roleinput.toLocaleLowerCase() === 'true'
  }
}
