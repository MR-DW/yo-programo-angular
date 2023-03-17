import { Component, OnInit } from '@angular/core';
import { DatosPorfolioService } from 'src/app/servicios/datos-porfolio.service';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {
 
  miPorfolio: any;

  constructor(private datosPorfolio: DatosPorfolioService){

  }

  ngOnInit(): void{
    this.datosPorfolio.obtenerDatos().subscribe(data => {
      console.log(data);
      this.miPorfolio = data;
    });
  }
}
