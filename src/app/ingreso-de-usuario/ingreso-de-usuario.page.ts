import { Component, OnInit } from '@angular/core';
import { CompartirVarService } from '../compartir-var.service';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-ingreso-de-usuario',
  templateUrl: './ingreso-de-usuario.page.html',
  styleUrls: ['./ingreso-de-usuario.page.scss'],
})
export class IngresoDeUsuarioPage implements OnInit {
  inputValue: string = '';
  currentSharedValue: any = null; 
  loginForm: FormGroup;

  constructor(
    private compartirVarService: CompartirVarService,
    private formBuilder: FormBuilder 
  ) {
    this.loginForm = this.formBuilder.group({
      email: ['', [Validators.required, Validators.email]],
      password: ['', [Validators.required, Validators.minLength(6)]],
    });
  }

  setVarNombre() {
    this.compartirVarService.setSharedVariable(this.inputValue);
    this.currentSharedValue = this.inputValue; 
  }

  onSubmit() {
    if (this.loginForm.valid) {
      console.log('Form data', this.loginForm.value);
    } else {
      console.log('Form is invalid');
    }
  }

  ngOnInit() {
  }
}
