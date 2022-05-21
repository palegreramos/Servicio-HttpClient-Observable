import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http'; 
import { AppComponent } from './app.component';
import { ServicioService } from './servicio.service';

@NgModule({
  imports:      [ BrowserModule, FormsModule, HttpClientModule ],
  declarations: [ AppComponent ],
  providers: [ ServicioService ], 
  bootstrap:    [ AppComponent ]
})
export class AppModule { }
