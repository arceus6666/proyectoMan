import { Component, OnInit, Output, EventEmitter } from '@angular/core';
import { User } from '../models/user';
import { RestapiService } from '../services/restapi.service';
import { Router } from '../../../node_modules/@angular/router';
import { LoggerService } from '../services/logger.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
  public mydata: any
  public email: string
  public password: string
  constructor(
    private _service: RestapiService,
    private _logger: LoggerService,
    private _router: Router
  ) { }

  ngOnInit() {
  }

  onSubmit() {
    this._service.getGlobal('/users/login', '',
      this.email+ ' ' + this.password)
      .subscribe(data =>{
        this.mydata = data
        this._logger.setRole(this.mydata.role)
        this._logger.setID(this.mydata._id)
        console.log('data')
        console.log(this.mydata)
        console.log('data')
      }, error => {
        console.log(error)
      })
    this._logger.logIn()
    this._router.navigate(['home'])
  }

}
