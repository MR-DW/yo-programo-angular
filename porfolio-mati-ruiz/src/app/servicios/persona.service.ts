import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Persona } from '../model/persona.model';
import { environment } from 'src/environments/environment.development';


@Injectable({
  providedIn: 'root'
})
export class PersonaService {

  // URL = 'http://localhost:8080/personas/';


  URL = environment.urldesarrollo + 'personas/';

  constructor(private HttpClient:HttpClient) { }

  public lista(): Observable<Persona[]>{
    return this.HttpClient.get<Persona[]>(this.URL + 'lista');
  }

  public detail(id:number): Observable<Persona>{
    return this.HttpClient.get<Persona>(this.URL + `detail/${id}`);
  }

  public update(id:number, persona:Persona): Observable<any>{
    return this.HttpClient.put<any>(this.URL + `update/${id}`, persona);
  }

  // public save(ersona:Persona): Observable<any>{
  //   return this.HttpClient.post<any>(this.URL + 'create', persona);
  // }

  // public delete(id:number): Observable<any>{
  //   return this.HttpClient.delete<any>(this.URL + `delete/${id}`);
  // }
}
