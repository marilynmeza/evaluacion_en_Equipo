import { Component, OnInit } from '@angular/core';
import { CompartirVarService } from '../compartir-var.service';


@Component({
  selector: 'app-inicio',
  templateUrl: './inicio.page.html',
  styleUrls: ['./inicio.page.scss'],
})
export class InicioPage implements OnInit {

  currentSharedValue: any = null; 
  constructor(private compartirVarService: CompartirVarService) {
    {
      this.currentSharedValue = this.compartirVarService.getSharedVariable();
    }
  }
  ngOnInit() {
  }

}
