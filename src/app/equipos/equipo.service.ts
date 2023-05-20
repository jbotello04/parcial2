import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Equipos_detail } from './equipo-detail';


@Injectable({
  providedIn: 'root'
})
export class EquipoService {
private ApiUrl: string= "https://worldcup-c4988-default-rtdb.firebaseio.com/teams.json";

constructor(private http: HttpClient) { }

getEquipos(): Observable<Equipos_detail[]> {
  return this.http.get<Equipos_detail[]>(this.ApiUrl);
}

getEquipo(id : string ): Observable<Equipos_detail>{
    return this.http.get<Equipos_detail>(this.ApiUrl);
  }
}
