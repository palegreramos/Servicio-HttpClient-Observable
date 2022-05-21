import { Component} from '@angular/core';
import {Todos} from './todos';
import { ServicioService } from './servicio.service';
import { Observable,of} from 'rxjs';


@Component({
  selector: 'my-app',
  templateUrl: './app.component.html',
  styleUrls: [ './app.component.css' ]
})
export class AppComponent  {

 public items$: Observable<Todos[]>;


  constructor (private servicioService: ServicioService) {}

  ngOnInit() {
    
     this.items$ = this.servicioService.getData();
 
  }

  cambiaEstado(item:Todos){
  item.completed=!item.completed;
  if (item.completed) item.title=item.title.toUpperCase();
  else item.title=item.title.toLowerCase();
  console.log(item)
  console.log(of(item))
  return of(item)

 }

  
}

