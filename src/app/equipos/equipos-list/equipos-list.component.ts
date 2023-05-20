import { Component, OnInit } from '@angular/core';
import { Equipos_detail } from '../equipo-detail';
import { EquipoService } from '../equipo.service';

@Component({
  selector: 'app-equipos-list',
  templateUrl: './equipos-list.component.html',
  styleUrls: ['./equipos-list.component.css']
})
export class EquiposListComponent implements OnInit {

  Equipos: Array<Equipos_detail>=[];

  selectedPartido!: Equipos_detail;

  selected: boolean =false;

  onSelected(partido:Equipos_detail){
    this.selected=true;
    this.selectedPartido=partido;
  }
  constructor(private Equiposervice:EquipoService) { }

  getEquipos():void {
    this.Equiposervice.getEquipos().subscribe((Equipos)=>{
      this.Equipos=Equipos;
    });
  }

  ngOnInit() {
    this.getEquipos();
  }

}
