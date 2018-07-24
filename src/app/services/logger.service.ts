import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class LoggerService {

  public role: boolean
  public loged: boolean
  public _id: string
  constructor() {
    this.role = false
    this.loged = false
  }

  setID(id){
    this._id = id
  }

  getID(){
    return this._id
  }

  logIn(){
    this.loged = true
  }

  logOut() {
    this.loged = false
  }

  isLoged(){
    return this.loged
  }

  getRole(){
    return this.role
  }

  setRole(r) {
    this.role = r
  }
}
