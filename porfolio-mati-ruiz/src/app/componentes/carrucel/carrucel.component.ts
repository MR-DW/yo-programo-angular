import { Component, OnInit } from '@angular/core';
import { ImgPorfolioService } from 'src/app/servicios/img/img-porfolio.service';
// import { PostsService } from 'src/app/servicios/mockServer/consumo-mock-server.service';
// import { environment } from 'src/environments/environment.development';

@Component({
  selector: 'app-carrucel',
  templateUrl: './carrucel.component.html',
  styleUrls: ['./carrucel.component.css'],
  // providers: [PostsService]
})
export class CarrucelComponent implements OnInit{

  img:any;
  public mock :any;

  constructor(private imgPorfolio: ImgPorfolioService,
    // private postsService:PostsService
    ){

  }

  ngOnInit(): void{
  this.imgPorfolio.obtenerImg().subscribe(data => {
    this.img = data;
  });

  // this.postsService.getPosts().subscribe(data => {
  //   this.mock = data;
  //   console.log("mock:", data)
  // });

  }
}
