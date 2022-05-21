import { Component, OnInit } from '@angular/core';
import { ServicioService } from '../servicio.service';
import { map } from 'rxjs/operators';
import { Todos } from '../todos';
import {FormBuilder, Validators} from '@angular/forms';


@Component({
  selector: 'app-users',
  templateUrl: './users.component.html',
  styleUrls: ['./users.component.css']
})
export class UsersComponent implements OnInit {
items: Todos[]=[];
valor:number;
form;
  constructor(private servicioService: ServicioService,private formBuilder: FormBuilder) { 
    this.form = formBuilder.group({
     num: ['',Validators.min(0),Validators.max(10)]})
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