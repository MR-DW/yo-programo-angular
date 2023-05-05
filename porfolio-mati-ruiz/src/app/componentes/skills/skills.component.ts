import { Component, OnInit } from '@angular/core';
import { DatosPorfolioService } from 'src/app/servicios/datos-porfolio.service';


@Component({
  selector: 'app-skills',
  templateUrl: './skills.component.html',
  styleUrls: ['./skills.component.css']
})
export class SkillsComponent implements OnInit {

  s: any;

  constructor(private datosPorfolio: DatosPorfolioService){

  }

  ngOnInit(): void{
    this.datosPorfolio.obtenerDatos().subscribe(data => {
      // console.log(data);
      this.s = data;
    });

  }

}
