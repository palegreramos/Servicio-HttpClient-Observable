import { Component, ViewChild} from '@angular/core';
import {Todos} from './todos';
import { ServicioService } from './servicio.service';
import { filter,map, Observable, from} from 'rxjs';


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
  

 }

  



