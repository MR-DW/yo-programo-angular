import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class MisTrabajosJsonService {

  constructor(private http:HttpClient) { }

  obtenerMiTrabajo(): Observable<any>{
    return this.http.get('./assets/data/misTrabajos.json');
    }
}
