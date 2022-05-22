import { Component, OnInit } from '@angular/core';
import {  FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';


@Component({
  selector: 'app-formulario',
  templateUrl: './formulario.component.html',
  styleUrls: ['./formulario.component.css']
})
export class FormularioComponent implements OnInit {
  public userForm!: FormGroup;

  constructor(private fb: FormBuilder) { 
    this.createForm();
  }

  ngOnInit() {
  }
  createForm() {
    this.userForm=this.fb.group({
      nombre: ['', [Validators.required]],
      pass1: ['', [Validators.required,Validators.pattern('[0-9a-zA-Z]{2,4}')]],
      pass2: ['',[Validators.required]]
    });
  }
  createUser() {
    if (this.userForm.valid) console.log("Usuario creado",this.userForm.value)
  }
  // matchValidator() {
  //   // if (control.get['pass1'].value==control.get['pass2'].value)
  //   // control.get('pass2').setErrors({ NoPassswordMatch: true });
  //   console.log(this.userForm)

  // }
  
}