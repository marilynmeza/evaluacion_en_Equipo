import { Component, OnInit } from '@angular/core';
import { CompartirVarService } from '../compartir-var.service';

@Component({
  selector: 'app-ingreso-de-usuario',
  templateUrl: './ingreso-de-usuario.page.html',
  styleUrls: ['./ingreso-de-usuario.page.scss'],
})
export class IngresoDeUsuarioPage implements OnInit {
  inputValue: string = '';
  currentSharedValue: any = null; 
  constructor(private compartirVarService: CompartirVarService) {
  }

  setVarNombre() {
    this.compartirVarService.setSharedVariable(this.inputValue);
    this.currentSharedValue = this.inputValue; 
  }
  ngOnInit() {
  }


}
