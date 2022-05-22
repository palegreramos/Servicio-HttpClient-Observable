import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { RouterModule, Routes } from "@angular/router";

import { HttpClientModule } from '@angular/common/http'; 
import { AppComponent } from './app.component';
import { ListadoComponent } from './listado/listado.component';
import { TablaComponent } from './tabla/tabla.component';
import { UsersComponent } from './users/users.component';
import { FormularioComponent } from './formulario/formulario.component';
import { ServicioService } from './servicio.service';

const routes: Routes = [
  { path: "tabla", component: TablaComponent },
  { path: "users", component: UsersComponent },
  { path: "form", component: FormularioComponent }
];

@NgModule({
  imports:      [ BrowserModule, FormsModule, ReactiveFormsModule, HttpClientModule, RouterModule.forRoot(routes) ],
  declarations: [ AppComponent, ListadoComponent, TablaComponent, UsersComponent, FormularioComponent ],
  providers: [ ServicioService ], 
  bootstrap:    [ AppComponent ]
})
export class AppModule { }
