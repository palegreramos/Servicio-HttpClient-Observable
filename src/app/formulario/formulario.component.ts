import { Component, OnInit } from '@angular/core';
import {  AbstractControl, FormBuilder, FormControl, FormGroup,  Validators } from '@angular/forms';
import {  ValidateCustom } from './passwordMatch.validator';


@Component({
  selector: 'app-formulario',
  templateUrl: './formulario.component.html',
  styleUrls: ['./formulario.component.css']
})
export class FormularioComponent implements OnInit {
  // public userForm:FormGroup=new FormGroup({});
 public userForm:FormGroup;

  constructor(private fb: FormBuilder) { 
    this.createForm();
  }

  ngOnInit() {
  }
  createForm() {
    this.userForm=this.fb.group({
      nombre: ['', [Validators.required]],
      pass1: ['', [Validators.required,Validators.pattern('[0-9a-zA-Z]{2,4}')]],
      pass2: ['',[Validators.required]], 
    },
    {
      validators: ValidateCustom.passwordMatchValidator('pass1', 'pass2')
    });
  }
  createUser() {
    console.log(this.userForm)
    if (this.userForm.valid) console.log("Usuario creado",this.userForm.value)
  }

  
}