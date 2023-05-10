import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { persona } from '../model/persona.model';


@Injectable({
  providedIn: 'root'
})
export class PersonaService {

  URL = 'http://localhost:8080/personas/';



  constructor(private http: HttpClient) { }

  public getPersona(id:number): Observable<persona> {
    // return this.http.get<persona>(this.URL + 'trear/perfil');
    return this.http.get<persona>('personas/traer/5');

  }
}
