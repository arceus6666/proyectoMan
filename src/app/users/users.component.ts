import { Component, OnInit } from '@angular/core';
import { LoggerService } from '../services/logger.service';
import { RestapiService } from '../services/restapi.service';

@Component({
  selector: 'app-users',
  templateUrl: './users.component.html',
  styleUrls: ['./users.component.css']
})
export class UsersComponent implements OnInit {
  public users: any
  constructor(private _logger: LoggerService,
  private _service: RestapiService) { }

  ngOnInit() {
    this._service.getGlobal('/users/get-all', '', '').subscribe(data=>{
      console.log(data)
      this.users = data
    },error=>{
      console.log('error\n'+error)
    })
  }

  disable(user){
    this._service.putGlobal(user, '/disable', '')
  }

}
