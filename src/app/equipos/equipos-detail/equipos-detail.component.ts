import { Component, Input, OnInit } from '@angular/core';
import { Equipos_detail } from '../equipo-detail';
import { ActivatedRoute } from '@angular/router';
import { EquipoService } from '../equipo.service';

@Component({
  selector: 'app-equipos-detail',
  templateUrl: './equipos-detail.component.html',
  styleUrls: ['./equipos-detail.component.css']
})
export class EquiposDetailComponent implements OnInit {

  @Input() eqDetail!: Equipos_detail;

  eqId!: string;

  constructor(private route: ActivatedRoute, private eqService: EquipoService) { }

  getBanda(){
    this.eqService.getEquipo(this.eqId).subscribe(eq=>{
      this.eqDetail = eq;
    })
  }
  ngOnInit() {
    if(this.eqDetail === undefined){
      this.eqId = this.route.snapshot.paramMap.get('id')!
      if (this.eqId){
        this.getBanda()
      }
    }
  }
}
