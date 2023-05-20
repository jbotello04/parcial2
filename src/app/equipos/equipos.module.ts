import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { EquiposComponent } from './equipos.component';
import { EquiposListComponent } from './equipos-list/equipos-list.component';
import { EquiposDetailComponent } from './equipos-detail/equipos-detail.component';

@NgModule({
  imports: [
    CommonModule
  ],
  exports:[EquiposListComponent],
  declarations: [EquiposComponent,EquiposListComponent,EquiposDetailComponent]
})
export class EquiposModule { }
