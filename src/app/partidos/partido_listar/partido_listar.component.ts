import { Component, OnInit } from '@angular/core';
import { PartidoService } from '../partido.service';
import { Partidos_detail } from '../partidos_detail/partidos_detail';

@Component({
  selector: 'app-partido-list',
  templateUrl: './partido_listar.component.html',
  styleUrls: ['./partido_listar.component.css']
})
export class PilotoListComponent implements OnInit {
  partidos: Array<Partidos_detail>=[];

  selectedPartido!: Partidos_detail;

  selected: boolean =false;

  onSelected(partido:Partidos_detail){
    this.selected=true;
    this.selectedPartido=partido;
  }
  constructor(private partidoService:PartidoService) { }

  getPartidos():void {
    this.partidoService.getPartidos().subscribe((partidos)=>{
      this.partidos=partidos;
    });
  }

  ngOnInit() {
    this.getPartidos();
  }

}
