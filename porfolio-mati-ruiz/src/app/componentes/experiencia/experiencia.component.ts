import { Component, OnInit } from '@angular/core';
import { DatosPorfolioService } from 'src/app/servicios/datos-porfolio.service';
import { ImgPorfolioService } from 'src/app/servicios/img/img-porfolio.service';


@Component({
  selector: 'app-experiencia',
  templateUrl: './experiencia.component.html',
  styleUrls: ['./experiencia.component.css']
})
export class ExperienciaComponent implements OnInit{

  experienciaList:any;
  img:any;

  constructor(private datosPorfolio: DatosPorfolioService,
    private imgPorfolio: ImgPorfolioService,){
    
  }

  ngOnInit(): void{
    this.datosPorfolio.obtenerDatos().subscribe(data => {
      this.experienciaList = data.experiencia;
    });

    this.imgPorfolio.obtenerImg().subscribe(data => {
      this.img = data;
    });
  }

}
