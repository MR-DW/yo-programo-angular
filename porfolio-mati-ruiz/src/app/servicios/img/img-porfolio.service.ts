import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ImgPorfolioService {

  constructor(private http:HttpClient) { }

  obtenerImg(): Observable<any>{
    return this.http.get('./assets/data/img.json');
  }
}
