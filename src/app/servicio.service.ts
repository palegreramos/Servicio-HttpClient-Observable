import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import {Todos} from './todos';
import { Observable,map,filter } from 'rxjs';


@Injectable({
  ​ 	  providedIn: ​'root'​
  ​ 	})
export class ServicioService {
  
  constructor(private http: HttpClient) { }
  
  getData(): Observable<Todos[]> {
    return this.http.get<Todos[]>('https://jsonplaceholder.typicode.com/todos');
  }
  
}

