import { Component} from '@angular/core';
import {Todos} from './todos';
import { ServicioService } from './servicio.service';
import { Observable} from 'rxjs';

@Component({
  selector: 'my-app',
  templateUrl: './app.component.html',
  styleUrls: [ './app.component.css' ]
})
export class AppComponent  {
public items:Array<Todos>;
 //public items$: Observable<Todos[]>;


  constructor (private servicioService: ServicioService) {}

  ngOnInit() {
      this.servicioService.getData()
         .subscribe((item:Todos[]) => 
           this.items=item);
     //this.items$ = this.servicioService.getData();
 
  }

  cambiaEstado(item) {
  item.completed=!item.completed;
  }

  
}

