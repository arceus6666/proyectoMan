import { Component, OnInit } from '@angular/core';
import { LoggerService } from '../services/logger.service';
import { Router } from '../../../node_modules/@angular/router';

@Component({
  selector: 'app-logout',
  templateUrl: './logout.component.html',
  styleUrls: ['./logout.component.css']
})
export class LogoutComponent implements OnInit {

  constructor(private _logger: LoggerService, private _router:Router) { }

  ngOnInit() {
    this._logger.logOut()
    this._logger.setRole(null)
    this._router.navigate(['home'])
  }

}
