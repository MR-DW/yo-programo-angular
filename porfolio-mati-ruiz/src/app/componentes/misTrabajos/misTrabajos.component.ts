import { Component, OnInit } from '@angular/core';
import { ImgPorfolioService } from 'src/app/servicios/img/img-porfolio.service';
import { MisTrabajosJsonService } from 'src/app/servicios/misTrabajos/mis-trabajos.json.service';
// import { ActivatedRoute } from '@angular/router';
// import { MiCarreraComponent } from '../miCarrera/miCarrera.component';

@Component({
  selector: 'app-misTrabajos',
  templateUrl: './misTrabajos.component.html',
  styleUrls: ['./misTrabajos.component.css']
})

export class MisTrabajosComponent implements OnInit{

  img:any;
  trabajos:any;
  componenteId:any;

  constructor(
    private imgPorfolio: ImgPorfolioService,
    private misTrabajosPorfolio: MisTrabajosJsonService,
    // private route: ActivatedRoute,
    ){

  }

  ngOnInit(): void{

    this.imgPorfolio.obtenerImg().subscribe(data => {
      this.img = data;
    });

    this.misTrabajosPorfolio.obtenerMiTrabajo().subscribe(data => {
      this.trabajos = data.misTrabajos;
      console.log(data.misTrabajos);
    });

    // this.route.paramMap.subscribe(params => {
    //   this.componentId = products[+params.get('componentId')];
    // });

  }

}
