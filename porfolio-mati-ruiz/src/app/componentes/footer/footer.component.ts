import { Component, OnInit } from '@angular/core';
import { DatosPorfolioService } from 'src/app/servicios/datos-porfolio.service';


@Component({
  selector: 'app-footer',
  templateUrl: './footer.component.html',
  styleUrls: ['./footer.component.css']
})
export class FooterComponent implements OnInit {

  contact: any;

  constructor(private datosPorfolio: DatosPorfolioService){

  }

  ngOnInit(): void{
    this.datosPorfolio.obtenerDatos().subscribe(data => {
      console.log(data);
      this.contact = data;
    });

  }

}
