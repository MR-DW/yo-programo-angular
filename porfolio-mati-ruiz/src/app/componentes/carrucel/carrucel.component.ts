import { Component, OnInit } from '@angular/core';
import { ImgPorfolioService } from 'src/app/servicios/img/img-porfolio.service';


@Component({
  selector: 'app-carrucel',
  templateUrl: './carrucel.component.html',
  styleUrls: ['./carrucel.component.css']
})
export class CarrucelComponent implements OnInit{

  img:any;

  constructor(private imgPorfolio: ImgPorfolioService){

  }

  ngOnInit(): void{
  this.imgPorfolio.obtenerImg().subscribe(data => {
    this.img = data;
  });

  }
}
