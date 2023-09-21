import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { IonicModule } from '@ionic/angular';
import { RestablecerContrasenaPageRoutingModule } from './restablecer-contrasena-routing.module';
import { RestablecerContrasenaPage } from './restablecer-contrasena.page';
import { SharedModule } from '../shared/shared.module';
import { ReactiveFormsModule } from '@angular/forms';


@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    RestablecerContrasenaPageRoutingModule,SharedModule,ReactiveFormsModule
  ],
  declarations: [RestablecerContrasenaPage]
})
export class RestablecerContrasenaPageModule {}
