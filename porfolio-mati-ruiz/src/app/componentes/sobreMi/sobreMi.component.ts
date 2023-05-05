import { Component, OnInit } from '@angular/core';
import { persona } from 'src/app/model/persona.model';
import { PersonaService } from 'src/app/servicios/persona.service';
// import { DatosPorfolioService } from 'src/app/servicios/datos-porfolio.service';
// import { ImgPorfolioService } from 'src/app/servicios/img/img-porfolio.service';


@Component({
  selector: 'app-sobre-mi',
  templateUrl: './sobreMi.component.html',
  styleUrls: ['./sobreMi.component.css']
})
export class SobreMiComponent implements OnInit {

  // miPorfolio: any;
  // img:any;

  persona: persona = new persona("", "", "", "", "");

  constructor(public personaService: PersonaService
    // private datosPorfolio: DatosPorfolioService, private imgPorfolio: ImgPorfolioService
    ){

  }

  ngOnInit(): void{
    let id = 0;

    this.personaService.getPersona(id).subscribe(data => {this.persona = data});
    console.log("sobre mi", this.persona);















    // this.datosPorfolio.obtenerDatos().subscribe(data => {
    //   console.log(data);
    //   this.miPorfolio = data;
    // });

    // this.imgPorfolio.obtenerImg().subscribe(data => {
    //   this.img = data;
    // });

  }

}
