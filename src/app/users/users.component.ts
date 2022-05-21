import { Component, OnInit } from '@angular/core';
import { ServicioService } from '../servicio.service';
import { map } from 'rxjs/operators';
import { Todos } from '../todos';



@Component({
  selector: 'app-users',
  templateUrl: './users.component.html',
  styleUrls: ['./users.component.css']
})
export class UsersComponent implements OnInit {
items: Todos[]=[];
valor:number;

  constructor(private servicioService: ServicioService) { 
  
  }

  ngOnInit() {
  }

  busca() {
    this.servicioService.getData().pipe(
      map(users => 
        users.filter(user => user.userId == this.valor)
      )
    ).subscribe(
      users => this.items = users
    )
    console.log(this.items)
  }
}