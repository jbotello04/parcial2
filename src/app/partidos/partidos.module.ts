import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { PartidoListComponent } from './partido_listar/partido_listar.component';
import { Partidos_detail } from './partidos_detail';
import { Partidos_detailComponent } from './partidos_detail/partidos_detail.component';

@NgModule({
  imports: [
    CommonModule
  ],
  exports: [PartidoListComponent],
  declarations: [Partidos_detailComponent,PartidoListComponent]
})
export class PartidosModule { }
