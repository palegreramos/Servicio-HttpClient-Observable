import { Component, OnInit, Input } from '@angular/core';
import { Observable } from 'rxjs/internal/Observable';
import { Todos } from '../todos';


@Component({
  selector: 'app-listado',
  templateUrl: './listado.component.html',
  styleUrls: ['./listado.component.css']
})
export class ListadoComponent implements OnInit {
@Input() items$:Observable<Todos[]>;

  constructor() {
  }

  ngOnInit() {
    
   }
  
  cambiaEstado(item:Todos){
    item.completed=!item.completed;
    if (item.completed) item.title=item.title.toUpperCase();
    else item.title=item.title.toLowerCase();
    console.log(item)
}
}
