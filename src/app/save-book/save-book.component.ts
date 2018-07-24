import { Component, OnInit, Input } from '@angular/core';
import { Libro } from '../models/libro';
import { Author } from '../models/author';
import { RestapiService } from '../services/restapi.service';

@Component({
  selector: 'app-save-book',
  templateUrl: './save-book.component.html',
  styleUrls: ['./save-book.component.css']
})
export class SaveBookComponent implements OnInit {
  @Input() role: boolean
  private libro: Libro
  private libroRes: Libro
  constructor(private _service:RestapiService) {
    this.libro = new Libro('', new Author('', '', ''), 0, new Date,
    '', '', false, new Date, 0, true)
   }

  ngOnInit() {
  }

  onSubmit(){
    this._service.postGlobal(this.libro, '/books/register-book', '')
    .subscribe(data => {
      //this.libroRes = data
    }, err => {
      console.log(err)
    })
    this.libro = new Libro('', new Author('', '', ''), 0, new Date,
    '', '', false, new Date, 0, true)
  }

}
