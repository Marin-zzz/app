import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { IonicModule } from '@ionic/angular';
import { DetalleBoletaPage } from './detalle-boleta.page';
import { RouterModule } from '@angular/router';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    RouterModule.forChild([{ path: '', component: DetalleBoletaPage }])
  ],
  declarations: [DetalleBoletaPage]
})
export class DetalleBoletaPageModule {}
