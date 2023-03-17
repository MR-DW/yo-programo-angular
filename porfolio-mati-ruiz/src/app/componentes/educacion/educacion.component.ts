import { Component, OnInit } from '@angular/core';
import { DatosPorfolioService } from 'src/app/servicios/datos-porfolio.service';

@Component({
  selector: 'app-educacion',
  templateUrl: './educacion.component.html',
  styleUrls: ['./educacion.component.css']
})
export class EducacionComponent implements OnInit{

  educacionList:any;

  constructor(private datosPorfolio: DatosPorfolioService){
    
  }

  ngOnInit(): void{
    this.datosPorfolio.obtenerDatos().subscribe(data => {
      this.educacionList = data.educacion;
    })
  }

}
