import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs/internal/Observable';
import { ServicioService } from '../servicio.service';
import { Todos } from '../todos';

@Component({
  selector: 'app-tabla',
  templateUrl: './tabla.component.html',
  styleUrls: ['./tabla.component.css']
})
export class TablaComponent implements OnInit {
  public items$: Observable<Todos[]>;

  constructor(private servicioService: ServicioService) { 
    this.items$ = this.servicioService.getData();
  }

  ngOnInit() {
  }

}