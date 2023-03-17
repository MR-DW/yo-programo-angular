import { Component, OnInit } from '@angular/core';
import { DatosPorfolioService } from 'src/app/servicios/datos-porfolio.service';
import { ImgPorfolioService } from 'src/app/servicios/img/img-porfolio.service';


@Component({
  selector: 'app-sobre-mi',
  templateUrl: './sobreMi.component.html',
  styleUrls: ['./sobreMi.component.css']
})
export class SobreMiComponent implements OnInit {

  miPorfolio: any;
  img:any;

  constructor(private datosPorfolio: DatosPorfolioService, private imgPorfolio: ImgPorfolioService){

  }

  ngOnInit(): void{
    this.datosPorfolio.obtenerDatos().subscribe(data => {
      console.log(data);
      this.miPorfolio = data;
    });

    this.imgPorfolio.obtenerImg().subscribe(data => {
      this.img = data;
    });

  }

}
