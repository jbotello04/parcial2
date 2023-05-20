import { Component, Input, OnInit } from '@angular/core';
import { Partidos_detail } from '../partidos_detail';

@Component({
  selector: 'app-partidos_detail',
  templateUrl: './partidos_detail.component.html',
  styleUrls: ['./partidos_detail.component.css']
})
export class Partidos_detailComponent implements OnInit {

  partidoId!: number;
  @Input() partido!: Partidos_detail;
  constructor() { }

  ngOnInit() {
  }

}
