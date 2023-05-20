import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Partidos_detail } from './partidos_detail';


@Injectable({
  providedIn: 'root'
})
export class PartidoService {
private ApiUrl: string= "https://worldcup-c4988-default-rtdb.firebaseio.com/matches.json";

constructor(private http: HttpClient) { }

getPartidos(): Observable<Partidos_detail[]> {
  return this.http.get<Partidos_detail[]>(this.ApiUrl);
}

getPartido(id : string ): Observable<Partidos_detail>{
    return this.http.get<Partidos_detail>(this.ApiUrl+"/"+id);
  }
}
