import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { enviroment } from '../../../enviroments/enviroment';
import { festivo } from './../../core/entidades/festivos';



@Injectable({
  providedIn: 'root'
})
export class FestivoService {
private url: String;
  constructor(private Http:HttpClient) {
    this.url=`${enviroment.urlBase}festivo/`;

  }

  public buscar(anio:number):Observable<festivo[]>{
    return this.Http.get<festivo[]>(`${this.url}listarfes/${anio}`)
  }

  public validar(anio:number,mes:number,dia:number):Observable<string>{
    const endpoint=`${this.url}esfestivo/${anio}/${mes}/${dia}`;
    return this.Http.get(endpoint,{responseType:'text'});
  }
}
