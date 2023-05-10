import { Component, OnInit } from '@angular/core';
import { Experiencia } from 'src/app/model/experiencia';
// import { DatosPorfolioService } from 'src/app/servicios/datos-porfolio.service';
// import { ImgPorfolioService } from 'src/app/servicios/img/img-porfolio.service';
import { SExperienciaService } from 'src/app/servicios/s-experiencia.service';
import { TokenService } from 'src/app/servicios/token.service';


@Component({
  selector: 'app-experiencia',
  templateUrl: './experiencia.component.html',
  styleUrls: ['./experiencia.component.css']
})
export class ExperienciaComponent implements OnInit{

  experiencia: Experiencia[]=[];
  data: any;
  // experienciaList:any;
  // img:any;

  constructor(private sExperiencia:SExperienciaService, private tokenService: TokenService
    // private datosPorfolio: DatosPorfolioService,private imgPorfolio: ImgPorfolioService
    ){

  }

  isLogged = false;

  ngOnInit(): void{


    //llama a la funcion que trae las experiencias
    this.cargarExperiencia();

     //Valida si está loggeado
    if(this.tokenService.getToken()){
      this.isLogged = true;

    }else{
      this.isLogged = false;
    }
    // this.datosPorfolio.obtenerDatos().subscribe(data => {
    //   this.experienciaList = data.experiencia;
    // });

    // this.imgPorfolio.obtenerImg().subscribe(data => {
    //   this.img = data;
    // });
  }

  //trae las experiencias
  cargarExperiencia():void{
    this.sExperiencia.lista().subscribe(
      data => {this.experiencia = data;});
  }

  borrar(id?: number){
    if(id != undefined){
      this.sExperiencia.delete(id).subscribe(
        data =>{
          this.cargarExperiencia();
        }, err => {
          alert("No es posible eliminar la experiencia");
        }
      )
    }

  }

}
