import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { DatosPorfolioService } from 'src/app/servicios/datos-porfolio.service';
import { TokenService } from 'src/app/servicios/token.service';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {

  miPorfolio: any;

  isLogged = false;



  constructor(private datosPorfolio: DatosPorfolioService, private router:Router, private tokenService:TokenService){

  }

  ngOnInit(): void{
    this.datosPorfolio.obtenerDatos().subscribe(data => {
      console.log(data);
      this.miPorfolio = data[0];
    });

    if(this.tokenService.getToken()){
      this.isLogged=true;
    }else{
      this.isLogged = false;
    }
  }

  // onLogOut(): void{
  //   this.tokenService.logOut();
  //   window.location.reload();
  //   this.router.navigate(['/iniciar-sesion']);
  // }

  login(){
    this.router.navigate(['/iniciar-sesion']);
  }

  volverAlMenuPrincipal(){
    this.router.navigate(['/portfolio']);
  }

}
